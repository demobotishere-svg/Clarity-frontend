import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { leads } from "@/db/schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";
import { sendWhatsAppTemplate } from "@/lib/whatsapp";

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

    let leadId = crypto.randomUUID();

    // Check if lead already exists
    const existing = await db.select().from(leads).where(eq(leads.phone, formattedPhone)).limit(1);

    if (existing.length > 0) {
      leadId = existing[0].id;
      // Update timestamp
      await db.update(leads)
        .set({ updatedAt: new Date() })
        .where(eq(leads.id, leadId));
    } else {
      // Insert new lead
      await db.insert(leads).values({
        id: leadId,
        name: name,
        phone: formattedPhone,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Attempt to trigger WhatsApp integration 
    // Usually standard templates are sent first to initiate a conversation
    try {
      await sendWhatsAppTemplate(formattedPhone, "clarity_welcome");
    } catch (waError) {
      console.error("WhatsApp delivery failed, but lead saved:", waError);
      // We still return success because the lead was captured
    }

    return NextResponse.json({ success: true, leadId });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
