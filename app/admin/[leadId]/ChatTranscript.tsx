"use client";

import { useEffect, useState } from "react";

export default function ChatTranscript({ messages }: { messages: any[] }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const formatTime = (dateString: string) => {
    if (!mounted) return "";
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    }).format(new Date(dateString));
  };

  return (
    <div className="space-y-6">
      {messages.map((msg) => {
        const isSystem = msg.role === "SYSTEM";
        return (
          <div key={msg.id} className={`flex flex-col ${isSystem ? "items-start" : "items-end"}`}>
            
            {/* Metadata (Time & Validation Status) */}
            <div className="flex items-center gap-2 mb-1 text-xs text-slate-500 px-1">
              {isSystem && <span className="font-semibold text-blue-600">Clarity AI</span>}
              <span>{formatTime(msg.createdAt)}</span>
              {!isSystem && (
                <>
                  {msg.isAcceptable === true && (
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">Valid Answer</span>
                  )}
                  {msg.isAcceptable === false && (
                    <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-medium">Invalid Answer</span>
                  )}
                  {msg.isAcceptable === null && (
                    <span className="bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-medium">Pending/Unvalidated</span>
                  )}
                </>
              )}
            </div>

            {/* Message Bubble */}
            <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
              isSystem 
                ? "bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200" 
                : "bg-blue-600 text-white rounded-tr-none shadow-sm"
            }`}>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
