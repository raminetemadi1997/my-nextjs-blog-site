import React from "react";
import parse from "html-react-parser";
import { getJsonLd } from "@/utils/videoStructure";
import SingleVideo from "./SingleVideo";
import { SpecialBox } from "@/types/Post/Post";

type TVideocontent = {
  data: Pick<SpecialBox , 'items' | 'video_position' | 'id'>;
};

export default function VideoContent({ data }: TVideocontent) {
  return (
    <div id={`video_content_${data.id}`}>
      {data.items.map((item) => (
        <div key={item.id} className="grid grid-cols-2 gap-4">
          {data.video_position == 0 && <SingleVideo {...data} />}
          {item.body && (
            <div className="text-gray-700 text-sm text-justify leading-8">
              {parse(item.body)}
            </div>
          )}

          {data.video_position == 1 && (
            <video
              width="640"
              height="360"
              controls
              poster={item.poster || undefined}
            >
              <source src={item?.video_path || ""} type="video/mp4" />
            </video>
          )}

          {item.structure_status == 1 &&
            item.data_structure &&
            parse(`<script type="application/ld+json">
                         ${getJsonLd(item.data_structure)}
                        </script>
                `)}
        </div>
      ))}
    </div>
  );
}
