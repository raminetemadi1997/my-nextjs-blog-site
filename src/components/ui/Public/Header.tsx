"use client";
import Image from "next/image";
import Container from "../../Container";
import Link from "next/link";
import Menu from "../Menu";
import Search from "../Search";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="md:px-0 px-2 relative z-50">
      <section className="bg-white shadow md:pt-2 md:pb-2 pt-4 z-10 md:rounded-b-none rounded-b-3xl">
        <Container>
          <div className="flex md:items-center items-end justify-between md:justify-start md:gap-4">
            {/* منو (سمت چپ در موبایل) */}
            <div className="md:hidden">
              <Menu />
            </div>

            {/* لوگو (وسط در موبایل) */}
            <Link href={"/"} className="w-auto mx-auto md:mx-0 md:w-2/12 md:mb-0 mb-2">
              <Image
                alt="logo"
                src="/images/blog_logo.png"
                width={130}
                height={70}
                priority={true}
              />
            </Link>

            {/* سرچ (سمت راست در موبایل) */}
            <div className="md:hidden">
              <Search />
            </div>

            {/* منو و سرچ در دسکتاپ (کنار هم) */}
            <div className="hidden md:flex items-center gap-4 w-1/12">
              <Menu />
              <Search />
            </div>

            {/* Navbar فقط در دسکتاپ */}
            <Navbar className="hidden md:flex justify-center w-9/12" />
          </div>
        </Container>
      </section>
    </header>
  );
};

export default Header;
