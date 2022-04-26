export interface Set {
  id?: string;
  title: string;
  description: string;
  cards: PalmCard[];
}

export interface PalmCard {
  question: string;
  answer: string;
  hint: string;
  imageUri: string | null;
}
