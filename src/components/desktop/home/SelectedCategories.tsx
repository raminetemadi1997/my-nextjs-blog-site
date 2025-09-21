import Title from "../../public/Title";
import CoverPost from "../../public/CoverPost";
import { ISelectedCategoriesData } from "@/types/Home/Home";

type TSelectedCategoriesProps = Pick<ISelectedCategoriesData, "data"> & {
  bottomTitle?: string;
  bottomSlug?: string;
};

export default async function SelectedCategories({
  data,
  bottomSlug,
  bottomTitle,
}: TSelectedCategoriesProps) {
  return (
    <div id={`selected_category_${data.id}`} className="space-y-4 md:pb-0 pb-4">
      {data.name && (
        <Title title={data.name} href={data.slug} buttonText={data.name} />
      )}
      <div className={`grid md:grid-cols-3 grid-cols-1 gap-2`}>
        {data.extra.posts.map((item) => (
          <CoverPost
            key={item.data.content.id}
            {...item.data.content}
            user={item.data.extra.user}
          />
        ))}
      </div>
      {bottomTitle && (
        <Title buttonText={bottomTitle} href={bottomSlug || "/"} />
      )}
    </div>
  );
}
