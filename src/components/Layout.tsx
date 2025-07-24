
import { responsiveValues } from "@/utils/responsive";
import Main from "./Main";
import Header from "./ui/Public/Header";
import MobileHeader from "./ui/Mobile/MobileHeader";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = async ({ children }: ILayoutProps) => {
const isMobile = await responsiveValues()

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
