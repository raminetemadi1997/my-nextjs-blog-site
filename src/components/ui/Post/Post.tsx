import Layout from "@/components/responsive/Layout";
import {IPostData } from "@/types/Post/Post";
import PostBannerContainer from "./PostBannerContainer";
import PostContent from "./PostContent";

export default function Post(props:Pick<IPostData , 'content' | 'statusControl' | 'extra'>) {

  const {content , statusControl} = props

  return (
    <Layout>
      
      {statusControl.bannerStatus == 1 && content.image && <PostBannerContainer {...content} />}

      <PostContent  {...props} />
      
    </Layout>
  );
}
