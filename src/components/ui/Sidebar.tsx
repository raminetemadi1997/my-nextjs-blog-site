"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";

interface ISidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: ISidebarProps) => {

  const [isClient, setIsClient] = useState(false);
   const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return !isMobile && (
    <StickyBox offsetTop={20} offsetBottom={20}>
      <aside className="space-y-4">{children}</aside>
    </StickyBox>
  );
};

export default Sidebar;
