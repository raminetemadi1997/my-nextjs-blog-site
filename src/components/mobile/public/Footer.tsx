import Link from "next/link";
import Container from "../../public/Container";
import parse from "html-react-parser";
import { IExtraSettings } from "@/types/setting/Setting";
import Picture from "@/components/public/Picture";




export default function Footer({footer , footerColor ,social}:Pick<IExtraSettings ,'footer' | 'footerColor' | 'social'>) {
  return (
    <footer>
      <div  style={{ backgroundColor: footerColor || "#000" }} className="py-8">
        <Container>
          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-2 px-4">
              <div className="text-white border-b border-white pb-2 font-bold w-fit">
                درباره ما
              </div>
              <div className="text-white leading-10 text-sm">
                 {footer.aboutUsMobile || `بلاگ دی سی ای کالا`}
              </div>
            </div>
            <div className="space-y-2 px-4">
              <div className="text-white border-b border-[#253A57] pb-2 font-bold w-fit">
                ما را در شبکه های اجتماعی دنبال کنید
              </div>
              <div className="text-white flex items-center gap-4">
                {social.data.map(
                    (items  , i) => (
                      <Link href={items.link} title={items.title} key={`social_media_Items_${items.id}_${i}`}>
                        <Picture
                          indexWeb={items.image.indexWeb}
                          indexArray={items.image.indexArray}
                          alt={items.imageAlt}
                          width={24}
                          height={24}
                        />
                      </Link>
                    )
                  )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-border py-4">
        <Container>
          <div className="text-xs text-center">
            {parse(footer.copyRight || `Copyright ©`)}
          </div>
        </Container>
      </div>
    </footer>
    
  );
}
