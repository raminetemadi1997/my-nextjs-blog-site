import Picture from "@/components/Picture";
import { SpecialBox } from "@/types/Post/Post";
const TitleSpecial = ({
  title,
  image_alt,
  image,
}: Pick<SpecialBox, "title" | "image" | "image_alt">) => {
  return (
    <div className="border-b border-border pb-2 flex items-center gap-2">
      {image && (
        <Picture
          indexWeb={image.indexWeb}
          indexArray={image.indexArray}
          currentImage={image.currentImage}
          height={26}
          alt={image_alt}
          width={26}
          imageClassName="rounded-full"
        />
      )}
      <div className="text-sm text-[#253a57b2]">{title}</div>
    </div>
  );
};

export default TitleSpecial;
