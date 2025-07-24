import Card from "../Card/Card";
import Title, { ITitleProps } from "../Title";

export default function HomeCardContainer({title , buttonText , href } : ITitleProps) {
  return (
     <div className="space-y-4">
      <Title title={title} buttonText={buttonText} href={href} />
      <div className={`grid md:grid-cols-3 grid-cols-1 gap-4`}>
        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
          mobile_changing={true}
        />

        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
          mobile_changing={true}
        />

        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
          mobile_changing={true}
        />

        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
          mobile_changing={true}
        />

        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
          mobile_changing={true}
        />

        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
          mobile_changing={true}
        />

        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
          mobile_changing={true}
        />

        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
          mobile_changing={true}
        />

        <Card
          webpSrc="/images/test_image.webp"
          fallbackSrc="/images/test_image.png"
          alt="بنر"
          height={1024}
          width={1024}
          text="نصب سریع دوربین های مداربسته بیسیم داهوا
و اسفیورد"
          author_name="مسلم زمانی ارفعی"
          author_image_webp="/images/test_image.webp"
          author_image_fallbackSrc="/images/test_image.png"
          created_date="1 ساعت پیش"
          author_image_alt="مسلم زمانی ارفعی"
          mobile_changing={true}
        />
      </div>
      <Title buttonText="مشاهده مقاله های بیشتر" href="/" />
    </div>
  )
}
