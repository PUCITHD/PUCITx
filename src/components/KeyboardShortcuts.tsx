import { useState } from "react";

const SHORTCUTS = [
  { keys: ["←"], desc: "Previous lecture" },
  { keys: ["→"], desc: "Next lecture" },
  { keys: ["⌘", "K"], desc: "Command palette" },
  { keys: ["S"], desc: "Share lecture link" },
  { keys: ["Esc"], desc: "Close dialogs" },
];

export default function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        title="Keyboard shortcuts"
        className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/40 text-sm flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/[0.1] hover:text-white/70"
      >
        ?
      </button>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-[rgba(20,20,35,0.98)] border border-white/[0.1] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8 w-full max-w-sm mx-4 animate-palette-in">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              ⌨️ Keyboard Shortcuts
            </h3>
            <div className="space-y-3">
              {SHORTCUTS.map((s) => (
                <div key={s.desc} className="flex items-center justify-between">
                  <span className="text-sm text-white/60">{s.desc}</span>
                  <div className="flex gap-1">
                    {s.keys.map((k) => (
                      <kbd
                        key={k}
                        className="px-2 py-1 text-xs font-mono text-white/50 bg-white/[0.06] border border-white/[0.1] rounded-md min-w-[28px] text-center"
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white/60 text-sm font-medium cursor-pointer transition-colors hover:bg-white/[0.1]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
