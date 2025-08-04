import Layout from "@/components/Layout";
import React from "react";

interface IBlogTemplateProps {
  children: React.ReactNode;
}

const BlogTemplate = async ({ children }: IBlogTemplateProps) => {
  return <Layout>{children}</Layout>;
};

export default BlogTemplate;
