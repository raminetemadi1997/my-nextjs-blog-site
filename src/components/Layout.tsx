
import { responsiveValues } from "@/utils/responsive";
import Main from "./Main";
import Header from "./ui/Public/Header";
import MobileHeader from "./ui/Mobile/MobileHeader";
import MobileFooter from "./ui/Mobile/MobileFooter";
import Footer from "./ui/Public/Footer";
import axios from "@/lib/axios";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: ILayoutProps) => {
const isMobile = await responsiveValues()
 
  const data = await axios
    .get("/api/blog/setting")
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header menus={data.data.extra.menus} logo={data.data.content.logo} logoAlt={data.data.content.logoAlt} />}
      <Main>{children}</Main>
      {isMobile ? (
        <MobileFooter />
      ) : (
        <Footer
          footer={data.data.extra.footer}
          footerColor={data.data.extra.footerColor}
          social={data.data.extra.social}
        />
      )}
    </>
  );
};

export default Layout;
