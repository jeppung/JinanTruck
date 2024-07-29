import { title } from "process";
import React from "react";

type WhyUsItem = {
  title: string;
  description: string;
};

const WhyUsItem = ({ title, description }: WhyUsItem) => {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-[#272727] p-5">
      <div className="h-1 w-20 bg-[#666666]"></div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="font-light">{description}</p>
    </div>
  );
};

export default WhyUsItem;
