import React from "react";
import img from "../../assets/header/11.png";
import img1 from "../../assets/header/22.png";
import img2 from "../../assets/header/33.png";
import img3 from "../../assets/header/44.png";
import img4 from "../../assets/header/55.png";
import { Link } from "react-router-dom";

export const EditServices = () => {
  // Data for packages, photos, and videos
  const packageData = [
    {
      title: "Luxury Packages",
      description:
        "Our most popular package including our most popular service:",
      features: ["Photos", "Videos", "Floor Plan"],
      price: 25,
      image: img,
    },
    {
      title: "Standard Packages",
      description: "Includes essential services for your property:",
      features: ["Photos", "Floor Plan"],
      price: 15,
      image: img1,
    },
  ];

  const photosData = [
    {
      title: "Drone Photo",
      description:
        "Help clients visualize your listing and its surroundings by capturing shots from the sky.",
      price: 25,
      image: img1,
    },
    {
      title: "Drone Photo",
      description:
        "Help clients visualize your listing and its surroundings by capturing shots from the sky.",
      price: 25,
      image: img2,
    },
    {
        title: "Drone Photo",
        description:
          "Help clients visualize your listing and its surroundings by capturing shots from the sky.",
        price: 25,
        image: img2,
      },
  ];

  const videosData = [
    {
      title: "Highlight Video (1-2 minutes)",
      description:
        "Highlight the main space and features of your listing with a 30-45 seconds video.",
      price: 25,
      image: img3,
    },
    {
      title: "Cinematic Video (30 seconds)",
      description:
        "Draw your audience in with a 1-2 minutes movie that flows beautifully through your listing.",
      price: 25,
      image: img4,
    },
    {
        title: "Cinematic Video (30 seconds)",
        description:
          "Draw your audience in with a 1-2 minutes movie that flows beautifully through your listing.",
        price: 25,
        image: img4,
      },
  ];

  return (
    <div className="bg-white">
      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Edit Services
        </h2>

        {/* Add Services Button */}
        <div className="flex justify-end mb-6">
          <Link to={'/dashboard/order-management/order-details/add-services'}><button className="bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-800">
            + Add Services
          </button></Link>
        </div>

        {/* Package Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Package</h3>
          <div className="grid grid-cols-3 gap-4">
          {packageData.map((pkg, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md overflow-hidden mb-4"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold">{pkg.title}</h4>
                <p className="text-sm text-gray-600 mb-4">
                  {pkg.description}
                  <br />
                  {pkg.features.map((feature, idx) => (
                    <span key={idx}>
                      • {feature} <br />
                    </span>
                  ))}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-red-500">
                    Price: ${pkg.price}
                  </span>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Photos Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Photos</h3>
          <div className="grid grid-cols-3 gap-6">
            {photosData.map((photo, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold">{photo.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {photo.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-red-500">
                      Price: ${photo.price}
                    </span>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Videos</h3>
          <div className="grid grid-cols-3 gap-6">
            {videosData.map((video, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold">{video.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {video.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-red-500">
                      Price: ${video.price}
                    </span>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between items-center text-lg font-semibold mb-6">
          <span>Total Amount</span>
          <span>$2550</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
            Cancel
          </button>
          <button className="px-6 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
