import { IIndexV } from "./IndexVariants";

export interface ICP {
  id?: number | string;
  name?: string;
  altName?: string;
  cover?:IIndexV
  coverAlt?: string;
  summary?: string;
  slug: string;
  postSlug?: string;
  publishedAt?: string;
  createdAt?: string;
  persianDate?: string;
}
