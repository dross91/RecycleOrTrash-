"use client";

import { useCallback, useState } from "react";
import NumberPicker from "@/components/NumberPicker";
import ResultView from "@/components/ResultView";
import type { ResinCode } from "@/lib/types";

export default function Home() {
  const [code, setCode] = useState<ResinCode | null>(null);

  const reset = useCallback(() => setCode(null), []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-bg px-4 py-10 sm:py-16">
      <div className="w-full max-w-2xl">
        <header className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 19l-2.5-4.33M4.5 14.67L7 10.33M4.5 14.67h5M17 5l2.5 4.33M19.5 9.33L17 13.67M19.5 9.33h-5M12 19l-2.5-4.33m2.5 4.33L14.5 14.67M12 19H7M12 5l-2.5 4.33M9.5 9.33L12 5m0 0h5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h1 className="text-2xl font-bold text-white">Recycle or Trash?</h1>
          </div>
          <p className="text-sm text-trash-light">
            {code === null
              ? "Find the little triangle on your plastic item and tap its number."
              : "Here's what that number means."}
          </p>
        </header>

        <section className="rounded-[2rem] border border-border bg-panel/50 p-5 shadow-2xl shadow-black/40 sm:p-8">
          {code === null ? (
            <NumberPicker onSelect={setCode} size="hero" />
          ) : (
            <ResultView code={code} onChangeNumber={setCode} onReset={reset} />
          )}
        </section>

        <footer className="mt-8 text-center text-xs text-trash-light">
          Built for quick checks at the bin — not a substitute for your local recycling guidelines.
        </footer>
      </div>
    </main>
  );
}
