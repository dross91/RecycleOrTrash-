"use client";

import type { ResinCode } from "@/lib/types";
import { ALL_CODES, getRule } from "@/lib/rules";

interface NumberPickerProps {
  onSelect: (code: ResinCode) => void;
  selected?: ResinCode | null;
  size?: "hero" | "compact";
}

export default function NumberPicker({ onSelect, selected, size = "hero" }: NumberPickerProps) {
  const isHero = size === "hero";

  return (
    <div className="w-full animate-fadeUp">
      <div
        className={`grid gap-3 ${
          isHero ? "grid-cols-3 sm:grid-cols-4 lg:grid-cols-7" : "grid-cols-4 sm:grid-cols-7"
        }`}
      >
        {ALL_CODES.map((code) => {
          const rule = getRule(code);
          const isSelected = selected === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => onSelect(code)}
              aria-pressed={isSelected}
              aria-label={`Resin code ${code}, ${rule.name}`}
              className={`flex flex-col items-center justify-center gap-1 rounded-2xl border-2 text-center transition-all active:scale-95
                ${isHero ? "min-h-[96px] px-3 py-5" : "min-h-[64px] px-2 py-3"}
                ${
                  isSelected
                    ? "border-green bg-green/10 text-green"
                    : "border-border bg-panel2 text-white hover:border-green/40 hover:bg-panel"
                }
              `}
            >
              <span className={isHero ? "text-3xl font-bold" : "text-xl font-bold"}>#{code}</span>
              <span className="text-[11px] uppercase tracking-wide text-trash-light">
                {rule.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
