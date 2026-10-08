export type ResinCode = "1" | "2" | "3" | "4" | "5" | "6" | "7";

export type Verdict = "recycle" | "trash";

export interface PlasticRule {
  name: string;
  fullName: string;
  verdict: Verdict;
  guidance: string;
  examples: string[];
  note: string;
  funFacts: string[];
}

export type RulesConfig = Record<ResinCode, PlasticRule>;
