import Link from "next/link";
import React from "react";
import styles from "./Card.module.css";
import PostPicture from "@/components/PostPicture";
import { IPostCardProps } from "@/types/PostCard";
import User from "../Public/User";
import Published from "../Public/Published";

const PostCard = ({
  id,
  cover,
  coverAlt,
  name,
  altName,
  persianDate,
  slug,
  user,
}: IPostCardProps) => {
  return (
    <article
      id={`article_${id}`}
      className={` overflow-hidden ${styles.box} rounded-sm`}
    >
      <Link href={slug}>
        <PostPicture
          indexWeb={cover.indexWeb}
          indexArray={cover.indexArray}
          height={308}
          width={308}
          alt={coverAlt}
          currentImage={cover.currentImage}
        />
        <div className={`space-y-4 p-4`}>
          {(name || altName) && (
            <div className="text-[#6A6F73]">{altName || name}</div>
          )}

          <div className="grid grid-cols-4 place-items-center">
            <User {...user} className=" col-span-2" />

            {persianDate && (
              <Published persianDate={persianDate}  />
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
