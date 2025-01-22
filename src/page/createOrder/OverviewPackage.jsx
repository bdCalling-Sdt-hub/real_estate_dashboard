import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Modal } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import img1 from "../../assets/header/11.png";
import img2 from "../../assets/header/22.png";
import img3 from "../../assets/header/33.png";
import img4 from "../../assets/header/44.png";
import img5 from "../../assets/header/55.png";
import img6 from "../../assets/header/66.png";
import img7 from "../../assets/header/77.png";
import img8 from "../../assets/header/88.png";
import { CreateCard } from "./CreateCard";


const servicesData = [
  {
    title: "Luxury Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Videos", "Floor Plan"],
    price: "$25",
    images: [img1, img2, img3],
  },
  {
    title: "Premium Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Cinematic Video", "Floor Plan"],
    price: "$45",
    images: [img4, img5, img6],
  },
  {
    title: "Luxury Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Highlight Video", "Cinematic Video"],
    price: "$50",
    images: [img7, img8, img1],
  },
  {
    title: "Premium Packages",
    description: "Our most popular package including our most popular service",
    features: ["Photos", "Videos", "Cinematic Video"],
    price: "$35",
    images: [img2, img3, img4],
  },
];

export const OverviewPackage = () => {

  return (
    <div>
      <h2
        className="text-2xl font-semibold mb-4"
        style={{  margin: "20px 0" }}
      >
        Overview of Packages/Services
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {servicesData.slice(0,3).map((service, index) => (
          <CreateCard key={index} service={service}></CreateCard>
        ))}
      </div>

      

      
    </div>
  );
};
