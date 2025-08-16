import { IPostPictureProps } from "./postPicture";
import { IUserProps } from "./User";

export interface IPostCardProps {
  id: number;
  name: string;
  altName: string;
  cover?: IPostPictureProps;
  coverAlt: string;
  slug: string;
  postSlug?: string;
  publishedAt?: string;
  createdAt?: string;
  persianDate?: string;
  user:IUserProps;
  summary?:string;
}
