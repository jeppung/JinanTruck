import Image from "next/image";
import Link from "next/link";
import React from "react";

type ServiceItemProps = {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
};

const ServiceItem = ({
  id,
  title,
  imageSrc,
  description,
}: ServiceItemProps) => {
  return (
    <div className="relative flex flex-col overflow-clip rounded bg-black text-white lg:flex-row">
      <div className="absolute left-0 flex h-12 w-12 items-center justify-center bg-black">
        <p>{id}</p>
      </div>
      <Image alt={title} src={imageSrc} width={500} height={0} />
      <div className="flex-2 flex flex-col gap-5 p-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="border-b border-t border-b-slate-500 border-t-slate-500 py-3">
          <p className="font-light">{description}</p>
        </div>
        <Link
          href="https://api.whatsapp.com/send?phone=6287880215500"
          className="self-end border px-5 py-2"
        >
          HUBUNGI KAMI
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
