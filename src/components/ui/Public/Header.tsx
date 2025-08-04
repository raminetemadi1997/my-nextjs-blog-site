import Container from "../../Container";
import Link from "next/link";
import Search from "../Search";
import Navbar from "../Navbar";
import { IPictureProps } from "@/types/picture";
import Picture from "@/components/Picture";

interface IHeaderProps {
  menus: IMenuData;
  logo: IPictureProps;
  logoAlt: string;
}

export interface IMenuData {
  status?: boolean;
  message?: string;
  className?: string;
  data: IDataItem[];
}

export interface IDataItem {
  id: number;
  name: string;
  slug: string;
  extra?: unknown;
}

const Header = ({ menus, logo, logoAlt }: IHeaderProps) => {
  return (
    <header className="relative z-50">
      <section className="bg-white shadow pt-2 pb-2">
        <Container>
          <div className="flex items-center justify-start md:gap-4">
            <Link href={"/"} className="">
              <Picture
                indexWeb={logo.indexWeb}
                indexArray={logo.indexArray}
                alt={logoAlt}
                height={72}
                width={130}
              />
            </Link>

            <div className="flex items-center w-1/12 justify-center">
              <Search />
            </div>

            {menus.status && (
              <Navbar {...menus} className="flex justify-start w-9/12" />
            )}
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
