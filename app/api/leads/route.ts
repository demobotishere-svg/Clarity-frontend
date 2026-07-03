import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { leads } from "@/db/schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    // Clean phone number (extract digits)
    const formattedPhone = phone.replace(/[^0-9]/g, "");
    if (formattedPhone.length < 10) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }

    // Check if lead already exists
    const existing = await db.select().from(leads).where(eq(leads.phone, formattedPhone)).limit(1);

    if (existing.length > 0) {
      // If already exists, just return success so they don't get an error, 
      // but maybe update the timestamp
      await db.update(leads)
        .set({ updatedAt: new Date() })
        .where(eq(leads.id, existing[0].id));
        
      return NextResponse.json({ success: true, message: "Lead updated" });
    }

    // Insert new lead
    const newId = crypto.randomUUID();
    
    await db.insert(leads).values({
      id: newId,
      name: name,
      phone: formattedPhone,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // TODO: Trigger WhatsApp integration here

    return NextResponse.json({ success: true, leadId: newId });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
