import { db } from "@/lib/db";
import { leads } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import ChatTranscript from "./ChatTranscript";
import ActivityLogFeed from "./ActivityLogFeed";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function LeadProfile({ params }: { params: Promise<{ leadId: string }> }) {
  const { leadId } = await params;
  
  const lead = await db.query.leads.findFirst({
    where: eq(leads.id, leadId),
    with: {
      activityLogs: {
        orderBy: (logs, { asc }) => [asc(logs.createdAt)]
      },
      assessment: {
        with: {
          messages: {
            orderBy: (msgs, { asc }) => [asc(msgs.createdAt)]
          }
        }
      }
    }
  });

  if (!lead) {
    notFound();
  }

  const assessment = lead.assessment;
  const messages = assessment?.messages || [];
  const logs = lead.activityLogs || [];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/admin" className="text-blue-600 hover:underline text-sm font-medium mb-2 inline-block">
            &larr; Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">{lead.name}&apos;s Profile</h1>
          <p className="text-slate-500">WhatsApp: {lead.phone}</p>
        </div>
        
        {assessment && (
          <div className="text-right">
            <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">Status</div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium inline-block ${
              assessment.status === "COMPLETED" ? "bg-green-100 text-green-700" :
              assessment.status === "IN_PROGRESS" ? "bg-blue-100 text-blue-700" :
              "bg-amber-100 text-amber-700"
            }`}>
              {assessment.status}
            </span>
            
            {assessment.score !== null && (
              <div className="mt-3">
                <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold block mb-1">AI Score</span>
                <span className="text-xl font-bold text-slate-800">{assessment.score}/100</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Chat Transcript */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-800">Chat Transcript</h2>
        </div>
        
        {messages.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No messages logged yet.</div>
        ) : (
          <div className="p-6">
            <ChatTranscript messages={messages} />
          </div>
        )}
      </div>

      {/* System Telemetry Logs */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-800">Backend Telemetry Logs</h2>
          <p className="text-sm text-slate-500 mt-1">Raw diagnostic feed of all system actions connected to this lead.</p>
        </div>
        
        {logs.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No telemetry logged yet.</div>
        ) : (
          <div className="p-6 bg-slate-950">
            <ActivityLogFeed logs={logs} />
          </div>
        )}
      </div>

    </div>
  );
}
