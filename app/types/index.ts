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

export interface Project {
  id: number;
  title: string;
  description: string;
  featured: boolean;
  site: string | null;
  source: string;
  file: File | null;
  visible: boolean;
  tags: Tag[];
}

export interface File {
  src: string;
  type: 'video' | 'image';
}
