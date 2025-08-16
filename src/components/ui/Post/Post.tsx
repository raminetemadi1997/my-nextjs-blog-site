import Layout from "@/components/responsive/Layout";
import { ApiResponse } from "@/types/Post/Post";
import React from "react";
import PostBannerContainer from "./PostBannerContainer";
import PostContent from "./PostContent";

export default function Post({ data }: ApiResponse) {
  return (
    <Layout>
      {data.content.image && <PostBannerContainer {...data} />}

      <PostContent  {...data} />
    </Layout>
  );
}
