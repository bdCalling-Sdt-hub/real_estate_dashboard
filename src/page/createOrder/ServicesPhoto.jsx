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
];

export const ServicesPhoto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const openModal = (images, title) => {
    setModalImages(images);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
  };
  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h2
        className="text-xl mb-4"
        style={{ textAlign: "", margin: "30px 0" }}
      >
        Showing 48 result
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {servicesData.map((service, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <Swiper spaceBetween={10} slidesPerView={1} autoplay={{ delay: 3000 }}>
              {service.images.map((image, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <img
                    src={image}
                    alt={service.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover", cursor: "pointer" }}
                    onClick={() => openModal(service.images, service.title)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-3">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
              <ul className="mt-3 list-disc ml-7">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="border-t flex justify-between p-3 items-center">
              <p style={{ color: "#9B3C7B", fontWeight: "bold" }}>Price: {service.price}</p>
              <button
                style={{
                  padding: "5px 20px",
                  backgroundColor: "#2A216D",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Swiper */}
      <Modal
        
        centered
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width="50%"
      >
        <div style={{ textAlign: "center", position: "relative" ,margin:'-30px'}}>
          <button
            onClick={showPreviousImage}
            style={{
              position: "absolute",
              left: -100,
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "80px",
              color: "white",
            }}
          >
            <IoIosArrowBack />
          </button>
          <img
            src={modalImages[currentImageIndex]}
            alt={modalTitle}
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
          <button
            onClick={showNextImage}
            style={{
              position: "absolute",
              right: -100,
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "80px",
              color: "white",
            }}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </Modal>

      
    </div>
  );
};
