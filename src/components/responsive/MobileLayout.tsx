import React from "react";
import MobileHeader from "../ui/Mobile/MobileHeader";
import MobileFooter from "../ui/Mobile/MobileFooter";
import Main from "../Main";

const MobileLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <MobileHeader />
      <Main>{children}</Main>
      <MobileFooter />
    </>
  );
};

export default MobileLayout;
