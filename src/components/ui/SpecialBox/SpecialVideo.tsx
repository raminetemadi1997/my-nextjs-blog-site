"use client";
import { ISpecialProps } from "@/types/Post/SpecialBox";
import { getJsonLd } from "@/utils/videoStructure";
import dynamic from "next/dynamic";
import React, { JSX } from "react";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";

import "react-loading-skeleton/dist/skeleton.css";

export default function SpecialVideo({ items, show_mode }: ISpecialProps) {
 

  if (show_mode == 0) {
    const MySwiperDynamic = dynamic(() => import("@/components/MySwiper"), {
      ssr: false,
      loading: () => (
        <div className="grid grid-cols-4 gap-4">
          <Skeleton height={160} />
          <Skeleton height={160} />
          <Skeleton height={160} />
          <Skeleton height={160} />
        </div>
      ),
    });
    const simpleVideos = (): {
      node: JSX.Element;
      structure: string | null;
    }[] => {
      return items.map((item) => {
        const structure =
          item.structure_status == 1 ? getJsonLd(item.data_structure) : null;
        return {
          node: (
            <div key={item.id} className="space-y-1">

            <div
              
              className="rounded-md overflow-hidden bg-black py-4 cursor-pointer"
            >
              <picture>
                <source srcSet={item.poster} type="image/jpeg" />
                <img
                  src={item.poster}
                  alt={item.title}
                  title={item.title}
                  width={227}
                  height={128}
                />
              </picture>

            </div>
              <div className="text-sm text-center line-clamp-1">{item.title}</div>

            </div>
          ),
          structure: structure,
        };
      });
    };
    const videos = simpleVideos();

    return (
      <>
        <MySwiperDynamic slides={videos.map((v) => v.node)} col={4} gap={15} />
        {videos.map(
          (v, i) =>
            v.structure && (
              parse(`
      <script type="application/ld+json" key="${i}">
        ${v.structure}
      </script>
    `)
            )
        )}
      </>
    );
  } else {
    const MySwiperDynamic = dynamic(() => import("@/components/MySwiper"), {
      ssr: false,
      loading: () => (
        <div className="grid grid-cols-10 gap-4">
          <Skeleton height={84} width={84} circle={true} />
          <Skeleton height={84} width={84} circle={true} />
          <Skeleton height={84} width={84} circle={true} />
          <Skeleton height={84} width={84} circle={true} />
          <Skeleton height={84} width={84} circle={true} />
          <Skeleton height={84} width={84} circle={true} />
          <Skeleton height={84} width={84} circle={true} />
          <Skeleton height={84} width={84} circle={true} />
          <Skeleton height={84} width={84} circle={true} />
          <Skeleton height={84} width={84} circle={true} />
        </div>
      ),
    });
    const simpleVideos = (): {
      node: JSX.Element;
      structure: string | null;
    }[] => {
      return items.map((item) => {
        const structure =
          item.structure_status == 1 ? getJsonLd(item.data_structure) : null;
        return {
          node: (
            <div key={item.id} className="flex items-center flex-col gap-1">
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 cursor-pointer flex justify-center items-center">
                <div className="rounded-full overflow-hidden bg-black w-20 h-20 border-2 border-white">
                  <picture>
                    <source srcSet={item.poster} type="image/jpeg" />
                    <img
                      src={item.poster}
                      alt={item.title}
                      title={item.title}
                      className="w-full h-full object-cover"
                    />
                  </picture>
                </div>
              </div>
              <div className="text-xs text-center line-clamp-1">{item.title}</div>
            </div>
          ),
          structure: structure,
        };
      });
    };
    const videos = simpleVideos();

    return (
      <>
        <MySwiperDynamic slides={videos.map((v) => v.node)} col={9} gap={15} />
        {videos.map(
          (v, i) =>
            v.structure && (
              parse(`
      <script type="application/ld+json" key="${i}">
        ${v.structure}
      </script>
    `)
            )
        )}
      </>
    );
  }
}
