import Image from "next/image";
import React from "react";

type ShowcaseProps = {
  imageSrc: string;
  titleSrc: string;
};

const Showcase = ({ imageSrc, titleSrc }: ShowcaseProps) => {
  return (
    <div className="flex h-[350px] w-fit flex-col items-center justify-center gap-5 rounded bg-[#999999] p-5 transition-transform hover:scale-105">
      <Image src={imageSrc} width={300} height={0} alt="image-logo" />
      <Image src={titleSrc} width={200} height={0} alt="title-logo" />
    </div>
  );
};

export default Showcase;
