export interface Link {
  text: string;
  href: string;
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