import Link from "next/link";
import Container from "../../Container";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

interface ISocialItem {
  id: string;
  name: string;
  icon: React.ReactElement;
}

const socials: ISocialItem[] = [
  {
    id: "1",
    name: "facebook",
    icon: <Facebook color="#ffffff" />,
  },
  {
    id: "2",
    name: "twitter",
    icon: <Twitter color="#ffffff" />,
  },
  {
    id: "3",
    name: "Linkedin",
    icon: <Linkedin color="#ffffff" />,
  },
  {
    id: "4",
    name: "Youtube",
    icon: <Youtube color="#ffffff" />,
  },
  {
    id: "5",
    name: "Instagram",
    icon: <Instagram color="#ffffff" />,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#253A57] py-8">
        <Container>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-10">
            <div className="md:space-y-8 space-y-2 md:col-span-2 md:px-0 px-4">
              <div className="text-white border-b border-white pb-2 font-bold w-fit">
                درباره ما
              </div>
              <div className="text-white leading-10 md:text-base text-sm">
                بلاگ دی سی ای کالا منبع اخبار تکنولوژی، مقالات راهنمای خرید،
                بررسی محصول و مقالات تحلیلی در رابطه با سیستم های حفاظتی و
                نظارتی و کالای برقی ساختمانی می باشد.
              </div>
            </div>
            <div className="md:space-y-8 space-y-2 md:col-start-4 md:px-0 px-4">
              <div className="text-white border-b border-[#253A57] pb-2 font-bold w-fit">
                ما را در شبکه های اجتماعی دنبال کنید
              </div>
              <div className="text-white flex items-center gap-4">
                {socials.map(({ icon, id, name }: ISocialItem) => (
                  <Link href={"/"} title={name} key={id}>
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#D9D9D9] py-4">
        <Container>
          <div className="text-xs text-center">
            کلیه حقوق این سایت متعلق به مجله خبری دی سی ای کالا می باشد
            Dcakala.com/Articles - Copyright © 2020-2017 | DcakalaArticles
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
