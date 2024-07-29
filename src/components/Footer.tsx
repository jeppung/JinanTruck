import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#111111] py-20">
      <div className="container mx-auto grid grid-cols-1 justify-center gap-10 px-5 lg:grid-cols-3 lg:px-0">
        <div>
          <Image
            className="hover:cursor-pointer"
            src={"/jinantruck-logo.png"}
            width={250}
            height={200}
            alt="jinantruck-logo"
          />
          <div className="mt-5 flex gap-2">
            <div className="w-fit cursor-pointer rounded-full bg-white p-2">
              <FaFacebook size={20} />
            </div>
          </div>
          <div className="mt-5">
            <small className="font-light text-white">
              © 2024 PT. Jinan Truck Power Indonesia All Rights Reserved
            </small>
          </div>
        </div>
        <div className="text-white">
          <h4 className="text-xl font-semibold">Sekilas Kami</h4>
          <p className="mt-3 text-sm font-light">
            <span className="font-bold">PT. Jinan Truck Power Indonesia</span>{" "}
            adalah perusahaan terkemuka yang menyediakan layanan profesional
            dalam bidang Spareparts Contract Support, Unit Purchase, dan VHS
            Spareparts Contract.
          </p>
        </div>
        <div className="text-white" id="contact">
          <h4 className="text-xl font-semibold">Kontak Kami</h4>
          <div className="mt-3 flex flex-col gap-3 font-light">
            <div className="flex cursor-pointer items-center gap-2">
              <BsFillTelephoneFill size={12} />
              <Link href="tel:087880215500" className="text-sm">
                0878 8021 5500
              </Link>
            </div>
            <div className="flex cursor-pointer items-center gap-2">
              <FaWhatsapp size={15} />
              <Link
                href="https://api.whatsapp.com/send?phone=6287880215500"
                className="text-sm"
              >
                0878 8021 5500
              </Link>
            </div>
            <div className="flex cursor-pointer items-center gap-2">
              <IoIosMailUnread size={15} />
              <Link href="mailto:jtpicorporation@gmail.com" className="text-sm">
                jtpicorporation@gmail.com
              </Link>
            </div>
            <div className="flex cursor-pointer items-center gap-2">
              <FaLocationDot size={12} />
              <p className="text-sm">
                Ruko 46 Blok G7, Pangeran Jayakarta, Jakarta Utara
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
