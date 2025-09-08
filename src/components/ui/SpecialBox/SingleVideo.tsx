import { getJsonLd } from "@/utils/videoStructure";
import React from "react";
import parse from "html-react-parser";
import { SpecialBox } from "@/types/Post/Post";

type TSingleVideoProps = Pick<SpecialBox , 'items'> & {
  width ?: number,
  height ?: number
}

export default function SingleVideo({ items ,height ,width}: TSingleVideoProps) {
  const videoDirection = items[0];
  const jsonLdString = getJsonLd(videoDirection.data_structure);
  const structureStatus: boolean =
    videoDirection.structure_status === 1 && !!jsonLdString;

  return (
    <>
      <video
        width={width || 640}
        height={height || 360}
        controls
        poster={videoDirection.poster || undefined}
        className="mx-auto"
      >
        <source src={videoDirection?.video_path || ""} type="video/mp4" />
      </video>

      {structureStatus &&
        parse(`
        <script type="application/ld+json">
          ${jsonLdString}
        </script>
      `)}
    </>
  );
}
