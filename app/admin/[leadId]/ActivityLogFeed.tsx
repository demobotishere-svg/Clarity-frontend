"use client";

import { useEffect, useState } from "react";

export default function ActivityLogFeed({ logs }: { logs: any[] }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const formatTime = (dateString: string) => {
    if (!mounted) return "";
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3
    }).format(new Date(dateString));
  };

  return (
    <div className="space-y-3 font-mono text-xs">
      {logs.map((log) => (
        <div key={log.id} className="p-3 bg-slate-900 text-slate-300 rounded border border-slate-700 flex flex-col sm:flex-row gap-2 sm:items-start">
          <div className="text-emerald-400 shrink-0">[{formatTime(log.createdAt)}]</div>
          <div className="shrink-0 font-bold text-indigo-400">[{log.action}]</div>
          <div className="text-slate-400 break-words flex-1">
            {log.details ? log.details : "No details"}
          </div>
        </div>
      ))}
    </div>
  );
}
