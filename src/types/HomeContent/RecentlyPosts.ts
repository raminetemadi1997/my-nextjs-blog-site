// RecentlyPosts = RP

import { ICP } from "../Image/CoverPost";
import { IPostCardProps } from "../PostCard";
import { IUserProps } from "../User";

export interface IRPData {
  title?: string,
  slug?:string,
  buttonText?:string,
  status?: boolean;
  message?: string;
  data?: IRPItem[];
}

interface IRPItem {
  status: boolean;
  message: string;
  data: IRPItemData;
}

export interface IRPItemData {
  content: ICP;
  meta: unknown;
  statusControl: IIRPStatusControl;
  extra: IRPExtra;
}

interface IRPExtra {
  postCategory: IRPPostCategory;
  user: IUserProps;
}

interface IRPPostCategory {
  id: number;
  name: string;
  slug: string;
}

interface IIRPStatusControl {
  status: number;
  isAllowed: boolean;
}

export interface IAllCategoriesData {
  status: boolean;
  message: string;
  data: IAllCategoriesItem[];
}

interface IAllCategoriesItem {
  status: boolean;
  message: string;
  data: IAllCategoriesItemData;
}

export interface IAllCategoriesItemData {
  id: number;
  name: string;
  slug: string;
  extra: unknown;
}