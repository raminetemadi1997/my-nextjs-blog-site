import Picture from '@/components/public/Picture';
import PostPicture from '@/components/public/PostPicture';
import Published from '@/components/public/Published';
import User from '@/components/public/User';
import { IPostCardProps } from '@/types/PostCard';
import { IUserProps } from '@/types/User';
import Link from 'next/link';
import React from 'react'
import parse from "html-react-parser";


type TCombinedTypes = Pick<
  IPostCardProps,
  | "id"
  | "slug"
  | "cover"
  | "coverAlt"
  | "summary"
  | "name"
  | "altName"
  | "persianDate"
  | "image"
  | "imageAlt"
> & {
  user: IUserProps;
};


export default function Card(props :TCombinedTypes ) {
 const { user, id , altName , coverAlt ,name ,slug ,cover ,persianDate , image , imageAlt , summary  } = props;

  const userCondition = user.image || user.slug || user.fullName;

  return (
    <article
      id={`article_${id}`}
      className={`overflow-hidden rounded-sm border-b border-border pb-4 last:border-b-0 last:pb-0`}
    >
      <Link href={slug ?? "#"} className="relative grid grid-cols-3 gap-4">
        <div className="relative overflow-hidden rounded-md">
          {cover && (
            <PostPicture
              indexWeb={cover?.indexWeb}
              indexArray={cover?.indexArray}
              height={308}
              width={308}
              alt={coverAlt || "تصویر"}
              currentImage={cover?.currentImage}
              directory={cover.directory}
            />
          )}

          {
            image &&
            <Picture
        indexWeb={image.indexWeb}
        indexArray={image.indexArray}
        width={308}
        height={308}
        alt={imageAlt || 'تصویر'}
        currentImage={image.currentImage}
        imageClassName='rounded-md'
      />
          }

          {/* {summary && (
            <motion.div
              initial={{ bottom: "-90%" }}
              whileHover={{ bottom: "0%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-1/2 w-full h-full rounded-xl p-4 space-y-3
               bg-gradient-to-t from-black/70 via-black/40 to-transparent
               backdrop-blur-md shadow-lg"
              style={{ bottom: "-90%" }}
            >
              <div className="h-1 w-12 bg-white rounded-full mx-auto"></div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-sm text-white leading-relaxed line-clamp-6 text-justify origin-top"
              >
                {parse(summary)}
              </motion.div>
            </motion.div>
          )} */}
        </div>

        <div className="space-y-4 bg-transparent col-span-2 flex flex-col justify-between py-2">
          {(name || altName) && (
            <div className="text-[#6A6F73]">
              {altName || name}
            </div>
          )}


          {
          summary &&
          <div className='line-clamp-2 text-xs text-[#6A6F73B2]'>
            {parse(summary)}
          </div>
          }

          <div className="grid grid-cols-4 place-items-center">
            {userCondition && (
              <User
                fullName={user.fullName}
                id={user.id}
                image={user.image}
              />
            )}
            {persianDate && (
              <div className='col-span-2'>
              <Published persianDate={persianDate} />
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
