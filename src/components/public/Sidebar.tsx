"use client";
import React from "react";
import StickyBox from "react-sticky-box";

interface ISidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebarProps) => {
  return (
    <aside>
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className="space-y-4">{children}</div>
      </StickyBox>
    </aside>
  );
};

export default Sidebar;
