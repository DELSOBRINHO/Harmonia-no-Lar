export interface RightDuty {
  id: string;
  title: string;
  description: string;
  category: 'husband' | 'wife' | 'both';
  type: 'right' | 'duty';
  weight: number;
  biblicalReference: string;
  ellenWhiteReference: string;
  pointValue: number;
}

export interface ChecklistItem {
  id: string;
  rightDutyId: string;
  date: string;
  completed: boolean;
  spouse: 'husband' | 'wife';
  notes?: string;
}

export interface DailyEvaluation {
  id: string;
  date: string;
  husbandScore: number;
  wifeScore: number;
  husbandAmount: number;
  wifeAmount: number;
  notes: string;
  moralDamages: MoralDamage[];
}

export interface MoralDamage {
  id: string;
  rightDutyId: string;
  description: string;
  compensationAction: string;
  completed: boolean;
  weight: number;
}

export interface BudgetItem {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
  recurring: boolean;
}

export interface Meditation {
  id: string;
  title: string;
  content: string;
  biblicalReference: string;
  ellenWhiteReference: string;
  date: string;
  category: 'relationship' | 'family' | 'spiritual';
}

export interface Tip {
  id: string;
  title: string;
  description: string;
  biblicalReference: string;
  ellenWhiteReference: string;
  category: 'happy_home' | 'winning_children';
}
