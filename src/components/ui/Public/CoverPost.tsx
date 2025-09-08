"use client";
import Link from "next/link";
import React from "react";
import styles from "../Card/Card.module.css";
import PostPicture from "@/components/PostPicture";
import User from "../Public/User";
import Published from "../Public/Published";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import { IUserProps } from "@/types/User";
import { IPostCardProps } from "@/types/PostCard";

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
> & {
  user: IUserProps;
};

export default function CoverPost(props: TCombinedTypes) {
  const { user, id , altName , coverAlt ,name ,slug ,cover ,persianDate ,summary } = props;

  const userCondition = user.image || user.slug || user.fullName;

  return (
    <article
      id={`article_${id}`}
      className={`overflow-hidden ${styles.box} rounded-sm group`}
    >
      <Link href={slug ?? "#"}>
        <div className="relative overflow-hidden">
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

          {summary && (
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
          )}
        </div>

        <div className="space-y-4 p-4 bg-white">
          {(name || altName) && (
            <div className="text-[#6A6F73]">
              {altName || name}
            </div>
          )}

          <div className="grid grid-cols-4 place-items-center">
            {userCondition && (
              <User
                fullName={user.fullName}
                id={user.id}
                image={user.image}
              />
            )}
            {persianDate && (
              <Published persianDate={persianDate} />
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
