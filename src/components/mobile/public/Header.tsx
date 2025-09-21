"use client";
import Container from "../../public/Container";
import Link from "next/link";
import Menu from "./Menu";
import Search from "../../public/Search";
import { ISettingData } from "@/types/setting/Setting";
import Picture from "@/components/public/Picture";

export default function Header({content ,extra}:Pick<ISettingData , 'content' | 'extra'>) {
  
  
  return (
    <header className="px-2 relative z-50">
      <section className="bg-white shadow pt-4 z-10 rounded-b-3xl">
        <Container>
          <div className="grid items-end grid-cols-5">
            <div className="place-items-start">
              {extra.menus.status && <Menu data={extra.menus.data}/>}
            </div>

            <Link href={"/"} className="w-auto mx-auto col-span-3">
              <Picture
                indexWeb={content.logo.indexWeb}
                indexArray={content.logo.indexArray}
                alt={content.logoAlt}
                currentImage={content.logo.currentImage}
                height={70}
                width={127}
              />
            </Link>

            <div className="place-items-end">
              <Search />
            </div>
          </div>
        </Container>
      </section>
    </header>
  );
}
