import React from "react";
import img11 from "../../assets/header/11.png";
import img22 from "../../assets/header/22.png";
import img33 from "../../assets/header/33.png";
import img44 from "../../assets/header/44.png";
import img55 from "../../assets/header/55.png";
import img66 from "../../assets/header/66.png";

export const FinishedFile = () => {
  const images = [
    { id: "P5467457756", src: img11 },
    { id: "P5467457756", src: img22 },
    { id: "P5467457756", src: img33 },
    { id: "P5467457756", src: img44 },
    { id: "P5467457756", src: img55 },
    { id: "P5467457756", src: img66 },
    { id: "P5467457756", src: img11 },
    { id: "P5467457756", src: img22 },
    { id: "P5467457756", src: img33 },
    { id: "P5467457756", src: img44 },
    { id: "P5467457756", src: img55 },
    { id: "P5467457756", src: img66 },
  ];

  return (
    <div className=" mt-9 min-h-screen">
      {/* Left Grid Section */}
      <div className=" ">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.id}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <p className="font-medium text-gray-700">{image.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};
