import { responsiveValues } from "@/utils/responsive";
import Title from "../Title";
import { IRPData } from "@/types/HomeContent/RecentlyPosts";
import CoverPost from "../Public/CoverPost";

export default async function HomeCardContainer({
  data,
  title,
  slug,
  buttonText,
}: IRPData) {
  const isMobile = await responsiveValues();
  

  return (
    <div className="space-y-4 md:pb-0 pb-4">
      <Title title={title} href={slug} buttonText={buttonText} />
      <div className={`grid md:grid-cols-3 grid-cols-1 gap-2`}>
        {data &&
          data.map((item) => (
            <CoverPost
              key={item.data.content.id}
              content={item.data.content}
              user={item.data.extra.user}
            />
          ))}

        {/* {cardData.map((card, index) =>
          isMobile ? (
            <MobileCard key={index} {...card} />
          ) : (
            <Card key={index} {...card} />
          )
        )} */}
      </div>
      {isMobile ? (
        <div className="rounded-sm text-white font-medium py-2 px-4 bg-[#253A57] w-fit mx-auto">
          عناوین بیشتر
        </div>
      ) : (
        <Title buttonText="مشاهده مقاله های بیشتر" href="/" />
      )}
    </div>
  );
}
