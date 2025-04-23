import { useRouter } from "next/router";
import Services from "./patterns/services";
import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import API from "@/router/index";
import Formations from "./patterns/formations";
const ServicesCategories = ({ phoneNumber }: { phoneNumber: string }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-64 h-64 -mt-20 -ml-32 bg-[#7daae6] rounded-full opacity-20 blur-xl"></div>

      <Services phoneNumber={phoneNumber} />

      <Formations phoneNumber={phoneNumber} />
    </div>
  );
};

export default ServicesCategories;
