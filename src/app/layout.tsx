import type { Metadata , Viewport } from "next";
import "@/styles/globals.css";
import { settingApi } from "@/services/handlerApi";
import { ISettingApi } from "@/types/setting/Setting";


const data = await settingApi() as ISettingApi


export const viewport:Viewport = {
  themeColor:data.data.meta.themeColor
}

export const metadata: Metadata = {
  title: {
    default: data.data.meta.title,
    template: `${data.data.meta.title} | %s`,
  },
  description: data.data.meta.description,
  keywords:data.data.meta.keywords,
  authors:{
    name:data.data.meta.author
  },
  generator:data.data.meta.generator,
  alternates :{
    languages : {
      [data.data.meta.siteLang] : `${process.env.NEXT_PUBLIC_DOMAIN}/${data.data.meta.siteLang}`,
    }
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
