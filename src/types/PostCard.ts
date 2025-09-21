import { IIndexV } from "./Image/IndexVariants";

import { IUserProps } from "./User";

export interface IPostCardProps {
  id: number;
  name: string;
  altName: string;
  cover?: IIndexV;
  image?:IIndexV
  coverAlt?: string;
  imageAlt?:string;
  slug: string;
  postSlug?: string;
  publishedAt?: string;
  createdAt?: string;
  persianDate?: string;
  user:IUserProps;
  summary?:string;
}
