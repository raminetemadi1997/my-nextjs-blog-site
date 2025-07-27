import Image from "next/image";
import Container from "../../Container";
import Link from "next/link";
import Search from "../Search";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="relative z-50">
      <section className="bg-white shadow pt-2 pb-2">
        <Container>
          <div className="flex items-center justify-start md:gap-4">

            <Link href={"/"} className="">
              <Image
                alt="logo"
                src="/images/blog_logo.png"
                width={130}
                height={70}
                priority={true}
              />
            </Link>

            
            <div className="flex items-center w-1/12 justify-center">
              <Search />
            </div>

            
            <Navbar className="flex justify-center w-9/12" />
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
