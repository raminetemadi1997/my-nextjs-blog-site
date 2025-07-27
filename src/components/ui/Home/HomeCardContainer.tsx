import { responsiveValues } from "@/utils/responsive";
import Card from "../Card/Card";
import Title, { ITitleProps } from "../Title";
import MobileCard from "../Mobile/MobileCard";

const cardData = Array(9).fill({
  webpSrc: "/images/test_image.webp",
  fallbackSrc: "/images/test_image.png",
  alt: "بنر",
  height: 1024,
  width: 1024,
  text: "نصب سریع دوربین های مداربسته بیسیم داهوا و اسفیورد",
  author_name: "مسلم زمانی ارفعی",
  author_image_webp: "/images/test_image.webp",
  author_image_fallbackSrc: "/images/test_image.png",
  created_date: "1 ساعت پیش",
  author_image_alt: "مسلم زمانی ارفعی",
});

export default async function HomeCardContainer({
  title,
  buttonText,
  href,
}: ITitleProps) {
  const isMobile = await responsiveValues();

  return (
    <div className="space-y-4 md:pb-0 pb-4">
      <Title title={title} buttonText={buttonText} href={href} />
      <div className={`grid md:grid-cols-3 grid-cols-1 gap-2`}>
        {cardData.map((card, index) =>
          isMobile ? (
            <MobileCard key={index} {...card} />
          ) : (
            <Card key={index} {...card} />
          )
        )}
      </div>
      {isMobile ? (
        <div className="rounded-sm text-white font-medium py-2 px-4 bg-[#253A57] w-fit mx-auto">
          عناوین بیشتر
        </div>
      ) : (
        <Title buttonText="مشاهده مقاله های بیشتر" href="/" />
      )}
    </div>
  );
}
