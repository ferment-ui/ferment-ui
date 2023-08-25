export interface Link {
  text: string;
  href: string;
}

export interface Option {
  text: string;
  value?: string;
  id?: string;
}

export interface Faq {
  key?: string;
  title: string;
  content: string;
  tags: string[];
}

export enum Variant {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  INFO = "info",
  DEFAULT = "default"
}

