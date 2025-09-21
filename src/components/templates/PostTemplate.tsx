import { IPostData } from "@/types/Post/Post";
import PostContent from "../desktop/post/PostContent";
import PostBannerContainer from "../public/post/PostBannerContainer";
import Layout from "../desktop/public/Layout";
import MobileLayout from "../mobile/public/Layout";
import { responsiveValues } from "@/utils/responsive";
import MobilePostContent from "../mobile/post/MobilePostContent";

export default async function Post(
  props: Pick<IPostData, "content" | "statusControl" | "extra">
) {
  const isMobile = await responsiveValues();
  const { content, statusControl } = props;

  if (isMobile) {
    return (
      <MobileLayout>
        {statusControl.bannerStatus == 1 && content.image && (
          <PostBannerContainer {...content} />
        )}
        <MobilePostContent {...props} mobile={isMobile}/>
      </MobileLayout>
    );
  }

  return (
    <Layout>
      {statusControl.bannerStatus == 1 && content.image && (
        <PostBannerContainer {...content} />
      )}

      <PostContent {...props} />
    </Layout>
  );
}
