import { ISpecialProps } from "@/types/Post/SpecialBox";
import { getJsonLd } from "@/utils/videoStructure";
import React from "react";
import parse from "html-react-parser";

export default function SingleVideo({ items }: ISpecialProps) {
  const videoDirection = items[0];
  const jsonLdString = getJsonLd(videoDirection.data_structure);
  const structureStatus: boolean =
    videoDirection.structure_status === 1 && !!jsonLdString;

  return (
    <>
      <video
        width="640"
        height="360"
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
