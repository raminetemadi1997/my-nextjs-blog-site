
import Main from "@/components/public/Main";
import Footer from "@/components/desktop/public/Footer";
import Header from "@/components/desktop/public/Header";
import {settingApi } from "@/services/handlerApi";


interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: ILayoutProps) => {
  
  const data = await settingApi()

  return (
    <>
      <Header
        menus={data.data.extra.menus}
        logo={data.data.content.logo}
        logoAlt={data.data.content.logoAlt}
      />
      <Main>{children}</Main>
      
      <Footer
        footer={data.data.extra.footer}
        footerColor={data.data.extra.footerColor}
        social={data.data.extra.social}
      />
    </>
  );
};

export default Layout;
