import Link from "next/link";
import Picture from "../../Picture";
import { Clock4 } from "lucide-react";
import { ICardProps } from "../Card/Card";


export default function MobileCard({
  text,
  fallbackSrc,
  alt,
  height,
  webpSrc,
  width,
  author_name,
  created_date,
  author_image_fallbackSrc,
  author_image_webp,
  author_image_alt,
  
}: ICardProps) {

    const createAuthor =
    author_name || created_date || author_image_fallbackSrc || author_image_webp
      ? true
      : false;


  return (
     <article className={`overflow-hidden border-b pb-4 border-border last:border-b-0 last:pb-0`}>
      <Link className='grid grid-cols-3 gap-2' href="/">
        <Picture
          webpSrc={webpSrc}
          fallbackSrc={fallbackSrc}
          alt={alt}
          height={height}
          width={width}
          imageClassName="object-cover w-full h-full rounded-md"
        />
        <div className={`space-y-4 col-span-2 flex flex-col justify-between`}>
          {text && <div className="text-[#6A6F73] text-xs">{text}</div>}

          {createAuthor && (
            <div className="grid grid-cols-4">
              {created_date && (
                <div className="flex items-center gap-1 col-span-2">
                  <Clock4 color="#a1a2a7" size={12} />
                  <div className="md:text-sm text-xs text-[#A1A2A7]">{created_date}</div>
                </div>
              )}
              <div className="flex items-center gap-1 col-span-2">
                <div>
                  {author_image_webp && author_image_fallbackSrc && (
                    <Picture
                      webpSrc={author_image_webp}
                      fallbackSrc={author_image_fallbackSrc}
                      alt={author_image_alt || "تصویر نویسنده"}
                      height={20}
                      width={20}
                      imageClassName="object-cover rounded-full"
                    />
                  )}
                </div>
                <div className="md:text-sm text-xs text-[#A1A2A7]">{author_name}</div>
              </div>
              
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}
