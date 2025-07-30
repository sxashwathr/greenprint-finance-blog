export interface Newsletter {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  topics: string[];
}

export const newsletters: Newsletter[] = [];
