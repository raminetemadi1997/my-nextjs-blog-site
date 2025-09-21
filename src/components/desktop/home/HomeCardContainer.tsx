import Title from "../../public/Title";
import CoverPost from "../../public/CoverPost";
import { IHomeContent } from "@/types/Home/Home";

type THomeCardContainerProps = Pick<IHomeContent, "recentlyPosts"> & {
  title?: string;
  slug?: string;
  buttonText?: string;
  bottomTitle ?:string;
  bottomSlug?:string
};

export default async function HomeCardContainer({
  recentlyPosts,
  buttonText,
  slug,
  title,
  bottomSlug,
  bottomTitle,
}: THomeCardContainerProps) {
  return (
    <div className="space-y-4 md:pb-0 pb-4">
      {title && <Title title={title} href={slug} buttonText={buttonText} />}
      <div className={`grid md:grid-cols-3 grid-cols-1 gap-2`}>
        {recentlyPosts.data.map((item) => (
          <CoverPost
            key={item.data.content.id}
            {...item.data.content}
            user={item.data.extra.user}
          />
        ))}
      </div>
        {
          bottomTitle &&
          <Title buttonText={bottomTitle} href={bottomSlug || '/'} />
        }
    </div>
  );
}
