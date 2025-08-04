import Link from "next/link";
import Container from "../../Container";
import { IPictureProps } from "@/types/picture";
import Picture from "@/components/Picture";

interface IFooterPorps {
  footerColor?: string | null;
  footer: IFooterData;
  social?: ISocialData;
}

interface IFooterData {
  copyRight: string | null;
  aboutUs: string | null;
  aboutUsMobile: string | null;
}

interface ISocialData {
  status: boolean;
  message: string;
  data: ISocialItems[];
}

interface ISocialItems {
  id: number;
  title: string;
  image: IPictureProps;
  imageAlt: string;
  link: string;
  extra: unknown;
}

const Footer = ({ footer, footerColor, social }: IFooterPorps) => {
  return (
    <footer>
      <div
        className={`py-8`}
        style={{ backgroundColor: footerColor || "#000" }}
      >
        <Container>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-8 col-span-2">
              <div className="text-white border-b border-white pb-2 font-bold w-fit">
                درباره ما
              </div>
              <div className="text-white leading-10 text-base ">
                {footer.aboutUs || `بلاگ دی سی ای کالا`}
              </div>
            </div>
            {social?.status && (
              <div className="space-y-8 col-start-4">
                <div className={`text-white border-b pb-2 font-bold w-fit`}>
                  ما را در شبکه های اجتماعی دنبال کنید
                </div>
                <div className="text-white flex items-center gap-4">
                  {social.data.map(
                    ({ link, title, id, image, imageAlt }: ISocialItems) => (
                      <Link href={link} title={title} key={id}>
                        <Picture
                          indexWeb={image.indexWeb}
                          indexArray={image.indexArray}
                          alt={imageAlt}
                          width={24}
                          height={24}
                        />
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
      <div className="bg-border py-4">
        <Container>
          <div className="text-xs text-center">
            {footer.copyRight || `Copyright ©`}
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
