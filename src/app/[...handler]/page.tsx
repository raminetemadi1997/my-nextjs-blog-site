import Category from "@/components/ui/Category/Category";
import Post from "@/components/ui/Post/Post";
import { handlerApi } from "@/services/handlerApi";
import { ICategoryApi } from "@/types/Category/Category";
import { IPostApi } from "@/types/Post/Post";
import { Metadata } from "next";

interface IPageProps {
  params: Promise<{ handler: string[] }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface IType {
  type: "post" | "category";
}

export async function generateMetadata({
  params,
}: IPageProps): Promise<Metadata> {
  const { handler } = await params;
  const pathString = [...handler].join("/");
  const data = await handlerApi(pathString);
  const type = data.type as IType["type"];

  if (type == "category") {
    return {
      title: data?.data.meta.title,
      description: data?.data.meta.description,
    };
  }
  return {
    title: data.data.meta.title,
    description: data.data.meta.description,
  };
}

export default async function HandlerPage({ params }: IPageProps) {
  const { handler } = await params;
  const pathString = [...handler].join("/");
  const data = await handlerApi(pathString);
  const type = data.type as IType["type"];

  if (type == "post") {
    const postData = data as IPostApi
    return <Post {...postData.data} />;
  } else {
    
    const categoryData = data as ICategoryApi;
    if (categoryData.data?.status) {
      return <Category {...categoryData.data} />;
    }
  }
}
