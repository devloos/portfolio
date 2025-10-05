export interface Experience {
  id: number;
  title: string;
  company: string;
  summary: string;
  url: string;
  startDate: StartDate;
  endDate: any;
  visible: boolean;
  tags: Tag[];
}

export interface StartDate {
  date: string;
  timezone_type: number;
  timezone: string;
}

export interface Tag {
  id: number;
  title: string;
  logoName?: string | null;
  url?: string | null;
  featured: boolean;
}
