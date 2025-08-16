import { responsiveValues } from "@/utils/responsive";
import Title from "../Title";
import { ISCItems } from "@/types/HomeContent/SelectedCategories";
import CoverPost from "../Public/CoverPost";

export default async function SelectedCategories({ data }: ISCItems) {
  const isMobile = await responsiveValues();

  return (
    <div id={`selected_category_${data.id}`} className="space-y-4 md:pb-0 pb-4">
      <Title title={data.name} href={data.slug} buttonText={data.name} />
      <div className={`grid md:grid-cols-3 grid-cols-1 gap-2`}>
        {data.extra.posts.map((item) => (
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
