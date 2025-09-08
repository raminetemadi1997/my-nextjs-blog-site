
import {  IPostExtra } from "@/types/Post/Post";
import React from "react";
import ImageSlider from "./ImageSlider";
import TitleSpecial from "./TitleSpecial";
import Accordion from "../Accordion";
import Paragraph from "./Paragraph";
import Brands from "./Brands";
import SingleVideo from "./SingleVideo";
import SpecialVideo from "./SpecialVideo";
import VideoContent from "./VideoContent";
import SpecialContent from "./SpecialContent";
import ProgressBar from "./ProgressBar";
import Article from "./Article";
import SpecialCardContainer from "./special-card/SpecialCardContainer";
import SpecialCategoryContainer from "./special-category-slider/SpecialCategoryContainer";


export default function SpecialBoxConianer({ specialBox }: Pick<IPostExtra , 'specialBox'>) {
  return (
    <section className="space-y-8">
      {specialBox.map((item) => {
        const arrayVisible = item.items.length > 0
        return (
          <div key={item.id} className="space-y-4" id={`spacial_${item.id}`}>
            {item.title_status == 1 && item.title && (
              <TitleSpecial
                title={item.title}
                image={item.image}
                image_alt={item.image_alt}
              />
            )}

            {(() => {
              switch (item.content_type) {
                case "image_slider":
                  return arrayVisible && <ImageSlider {...item} />;

                case "accordion":
                  return <Accordion {...item} />;

                case "category":
                  return arrayVisible && <SpecialCategoryContainer {...item} />;

                case "faq":
                  return arrayVisible && <Accordion {...item} />;

                case "custom_brand":
                  return arrayVisible && <Brands {...item} />;

                case "first_content":
                  return arrayVisible && <SpecialContent {...item} />;

                case "paragraph":
                  return arrayVisible && <Paragraph {...item} />;

                case "post":
                  return arrayVisible &&  <Article {...item} />;

                case "product":
                  return arrayVisible &&  <SpecialCardContainer {...item} />;

                case "progress":
                  return arrayVisible && <ProgressBar {...item} />;

                case "second_content":
                  return arrayVisible && <SpecialContent {...item} />;

                case "single_video":
                  return arrayVisible && <SingleVideo {...item} />;

                case "third_content":
                  return arrayVisible && <SpecialContent {...item} />;

                case "video":
                  return arrayVisible && <SpecialVideo {...item}/>;

                case "video_content":
                  return arrayVisible && <VideoContent data={item}/>;

                default:
                  return null;
              }
            })()}
          </div>
        );
      })}
    </section>
  );
}
