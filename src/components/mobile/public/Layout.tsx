import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../../public/Main";
import { settingApi } from "@/services/handlerApi";
import { ISettingApi } from "@/types/setting/Setting";

const Layout = async ({ children }: {children: React.ReactNode}) => {
  const data = await settingApi() as ISettingApi
  return (
    <>
      <Header content={data.data.content} extra={data.data.extra} />
      <Main>{children}</Main>
      <Footer {...data.data.extra} />
    </>
  );
};

export default Layout;
