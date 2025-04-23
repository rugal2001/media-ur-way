import { useRouter } from "next/router";
import Services from "./patterns/services";
import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import API from "@/router/index";
import Formations from "./patterns/formations";
const ServicesCategories = () => {
  return (
    <div>
      <Services />
      <div id="formations">
        <Formations />
      </div>
    </div>
  );
};

export default ServicesCategories;
