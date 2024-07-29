"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="inline">
      <div className="sticky top-0 z-50 bg-[#000000] px-5 text-white md:px-0">
        <div className="container mx-auto flex items-center justify-between py-6">
          <Link href={"/"}>
            <Image
              className="hover:cursor-pointer"
              src={"/jinantruck-logo.png"}
              width={200}
              height={200}
              alt="jinantruck-logo"
            />
          </Link>
          <RxHamburgerMenu
            onClick={() => setIsOpen(!isOpen)}
            size={20}
            className="md:hidden"
          />
          <nav className="hidden md:inline">
            <ul className="flex gap-5">
              <li className="cursor-pointer">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/#aboutus"}>Tentang Kami</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/#services"}>Layanan</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/#contact"}>Kontak</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={`${isOpen ? "block pb-5" : "hidden pb-0"} transition-all delay-150 ease-in-out`}
        >
          <nav>
            <ul className="flex justify-center gap-5">
              <li className="cursor-pointer">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/#aboutus"}>Tentang Kami</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/#services"}>Layanan</Link>
              </li>
              <li className="cursor-pointer">
                <Link href={"/#contact"}>Kontak</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
