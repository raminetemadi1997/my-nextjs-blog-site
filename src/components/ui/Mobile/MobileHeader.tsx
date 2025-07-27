"use client";
import Image from "next/image";
import Container from "../../Container";
import Link from "next/link";
import Menu from "../Menu";
import Search from "../Search";

export default function MobileHeader() {
  return (
    <header className="px-2 relative z-50">
      <section className="bg-white shadow pt-4 z-10 rounded-b-3xl">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <Menu responsive="mobile" />
            </div>

            <Link href={"/"} className="w-auto mx-auto mb-2">
              <Image
                alt="logo"
                src="/images/blog_logo.png"
                width={130}
                height={70}
                priority={true}
              />
            </Link>

            <div>
              <Search />
            </div>
          </div>
        </Container>
      </section>
    </header>
  );
}
