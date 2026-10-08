"use client";

import { useState } from "react";
import type { ResinCode } from "@/lib/types";
import { getRule } from "@/lib/rules";
import NumberPicker from "./NumberPicker";

interface ResultViewProps {
  code: ResinCode;
  onChangeNumber: (code: ResinCode) => void;
  onReset: () => void;
}

function RecycleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 19l-2.5-4.33M4.5 14.67L7 10.33M4.5 14.67h5M17 5l2.5 4.33M19.5 9.33L17 13.67M19.5 9.33h-5M12 19l-2.5-4.33m2.5 4.33L14.5 14.67M12 19H7M12 5l-2.5 4.33M9.5 9.33L12 5m0 0h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l1.8 4.9L19 9.5l-5.2 1.6L12 16l-1.8-4.9L5 9.5l5.2-1.6L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResultView({ code, onChangeNumber, onReset }: ResultViewProps) {
  const [changing, setChanging] = useState(false);
  const rule = getRule(code);
  const isRecycle = rule.verdict === "recycle";

  return (
    <div className="w-full animate-fadeUp">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm font-medium text-trash-light">You selected</p>
          <h2 className="text-3xl font-bold text-white">
            #{code} <span className="text-trash-light">–</span> {rule.name}
          </h2>
          <p className="text-sm text-trash-light">{rule.fullName}</p>
        </div>

        <div
          className={`flex items-center gap-3 rounded-2xl border px-5 py-4 ${
            isRecycle
              ? "border-green/40 bg-green/10 text-green"
              : "border-border bg-panel2 text-trash-light"
          }`}
        >
          {isRecycle ? <RecycleIcon /> : <TrashIcon />}
          <span className="text-xl font-extrabold uppercase tracking-wide">
            {isRecycle ? "Recycle" : "Trash"}
          </span>
        </div>

        <p className="text-base text-white/90">{rule.guidance}</p>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-trash-light">
            Common examples
          </p>
          <div className="flex flex-wrap gap-2">
            {rule.examples.map((ex) => (
              <span
                key={ex}
                className="rounded-full border border-border bg-panel2 px-3 py-1 text-xs text-white/80"
              >
                {ex}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-panel2/60 px-5 py-4">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-green">
            <SparkleIcon />
            Fun facts &amp; tips
          </p>
          <ul className="space-y-1.5">
            {rule.funFacts.map((fact) => (
              <li key={fact} className="flex gap-2 text-sm text-white/80">
                <span className="text-green">•</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-trash-light">{rule.note}</p>

        <p className="text-xs text-trash-light">
          Rules vary by location — check with your local recycling program.
        </p>

        <button
          type="button"
          onClick={() => setChanging((v) => !v)}
          className="self-start text-sm font-medium text-green underline-offset-4 hover:underline"
        >
          {changing ? "Hide number picker" : "Pick a different number"}
        </button>

        {changing && (
          <NumberPicker
            size="compact"
            selected={code}
            onSelect={(c) => {
              onChangeNumber(c);
              setChanging(false);
            }}
          />
        )}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-8 w-full rounded-full bg-green px-6 py-4 text-base font-semibold text-black transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
      >
        Start over
      </button>
    </div>
  );
}
