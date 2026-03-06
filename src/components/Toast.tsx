import { useState, useEffect, useCallback } from "react";

interface Toast {
  id: number;
  message: string;
  icon?: string;
}

let nextId = 0;
const listeners: Set<(t: Toast) => void> = new Set();

/** Fire a toast from anywhere */
export function toast(message: string, icon = "✓") {
  const t: Toast = { id: nextId++, message, icon };
  listeners.forEach((fn) => fn(t));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const add = useCallback((t: Toast) => {
    setToasts((prev) => [...prev, t]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== t.id));
    }, 2800);
  }, []);

  useEffect(() => {
    listeners.add(add);
    return () => { listeners.delete(add); };
  }, [add]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 items-center pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto animate-toast bg-white/[0.12] backdrop-blur-xl border border-white/[0.12] text-white text-sm font-medium px-5 py-3 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center gap-2.5"
        >
          <span className="text-primary-light text-base">{t.icon}</span>
          {t.message}
        </div>
      ))}
    </div>
  );
}
