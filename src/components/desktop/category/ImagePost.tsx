"use client";
import Link from "next/link";
import React from "react";
import PostPicture from "@/components/public/PostPicture";
import User from "../../public/User";
import Published from "../../public/Published";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import { IIP } from "@/types/Image/ImagePost";
import { IUserProps } from "@/types/User";

type TCombinedTypes = {
    user:IUserProps,
    content:IIP
};

export default function ImagePost(props: TCombinedTypes) {
  const {
    content,
    user
  } = props;


  const userCondition = user.image || user.slug || user.fullName;

  return (
      <article
        id={`article_${content.id}`}
        className={`overflow-hidden border border-black/7 shadow-[0_2px_0.1px_0_#00000036] rounded-sm group`}
      >
        <Link href={content.slug ?? "#"}>
          <div className="relative overflow-hidden">
            {content.image && (
              <PostPicture
                indexWeb={content.image?.indexWeb}
                indexArray={content.image?.indexArray}
                height={308}
                width={308}
                alt={content.imageAlt || "تصویر"}
                currentImage={content.image?.currentImage}
                directory={content.image.directory}
              />
            )}
  
            {content.summary && (
              <motion.div
                initial={{ bottom: "-90%" }}
                whileHover={{ bottom: "0%" }}
                transition={{ duration: 0.4 }}
                className="absolute left-1/2 -translate-x-1/2 w-full h-full rounded-xl p-4 space-y-3
                 bg-gradient-to-t from-black/70 via-black/40 to-transparent
                 backdrop-blur-md shadow-lg"
                style={{ bottom: "-90%" }}
              >
                <div className="h-1 w-12 bg-white rounded-full mx-auto"></div>
  
                <motion.div
                  
                  transition={{ duration: 0.3 }}
                  className="text-sm text-white leading-relaxed line-clamp-6 text-justify origin-top"
                >
                  {parse(content.summary)}
                </motion.div>
              </motion.div>
            )}
          </div>
  
          <div className="space-y-4 p-4 bg-white">
            {(content.name || content.altName) && (
              <div className="text-[#6A6F73]">{content.altName || content.name}</div>
            )}
  
            <div className="grid grid-cols-4 place-items-center">
              {userCondition && (
                <User
                  fullName={user.fullName}
                  id={user.id}
                  image={user.image}
                />
              )}
              {content.persianDate && 
              <div className="col-span-2">
              <Published persianDate={content.persianDate} />
              </div>
              }
            </div>
          </div>
        </Link>
      </article>
    );
}
