import PostPicture from "@/components/PostPicture";
import { ISpecialItems } from "@/types/Post/SpecialBox";
import Link from "next/link";

export default function SpecialCategory({
  category_id,
  image,
  image_alt,
  slug,
  name,
  id,
}: ISpecialItems) {
  return (
    <Link
      href={slug || "#"}
      title={name}
      id={`category_${id}_${category_id}`}
      className="flex justify-center flex-col items-center gap-2"
    >
      <div>
        <div
          className=" w-32 h-32 bg-white rounded-full border-border relative flex items-center justify-center"
          style={{
            backgroundImage: 'url("/images/categorybg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {image && (
            <div className="w-28 h-28 flex justify-center items-center rounded-full overflow-hidden">
              <PostPicture
                directory={image.directory}
                indexWeb={image.indexWeb}
                indexArray={image.indexArray}
                currentImage={image.currentImage}
                width={85}
                height={85}
                alt={image_alt || "دسته بندی"}
              />
            </div>
          )}
        </div>
      </div>
      <div className="text-sm line-clamp-1">{name}</div>
    </Link>
  );
}
