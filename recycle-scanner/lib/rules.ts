import rulesData from "@/rules.json";
import type { ResinCode, RulesConfig } from "./types";

export const rules = rulesData as unknown as RulesConfig;

export function getRule(code: ResinCode) {
  return rules[code];
}

export const ALL_CODES: ResinCode[] = ["1", "2", "3", "4", "5", "6", "7"];
