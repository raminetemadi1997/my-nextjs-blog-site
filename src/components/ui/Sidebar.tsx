"use client";
import React from "react";
import StickyBox from "react-sticky-box";

interface ISidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebarProps) => {



  return (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <aside className="space-y-4">{children}</aside>
    </StickyBox>
  );
};

export default Sidebar;
