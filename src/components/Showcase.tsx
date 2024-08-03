import Image from "next/image";
import React from "react";

type ShowcaseProps = {
  desc: string;
  imageSrc: string;
  titleSrc: string;
};

const Showcase = ({ imageSrc, titleSrc, desc }: ShowcaseProps) => {
  return (
    <div className="flex h-[350px] w-fit flex-col items-center justify-center gap-5 rounded bg-[#999999] p-5 transition-transform hover:scale-105">
      <Image src={imageSrc} width={300} height={0} alt={`${desc}-image`} />
      <Image src={titleSrc} width={200} height={0} alt={`${desc}-title`} />
    </div>
  );
};

export default Showcase;
