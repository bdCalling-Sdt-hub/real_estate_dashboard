import React from "react";
import { LuDownload, LuFileCheck, LuFileCheck2 } from "react-icons/lu";
import { MdLink } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiReload } from "react-icons/tfi";
import { PiFileImageDuotone } from "react-icons/pi";

export const PurchasedPackageSection = () => {
  const services = [
    {
      title: "Twilight Photo",
      status: "Completed",
    },
    {
      title: "Drone Photo",
      status: "In Production",
    },
  ];

  const otherServices = [
    {
      title: "Cinematic Video",
      status: "Revisions",
    },
  ];

  return (
    <div className=" mt-8 ">
      <h2 className="text-lg font-bold mb-4 bg-[#F38E0A] text-white p-3 rounded-md">
        Purchased Package/Services
      </h2>

      {/* Package Services */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-4">Package Services</h3>
        <div className="">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-2  border border-gray-200 rounded-md p-4 mb-6"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{service.title}</span>
                <div className="flex gap-2">
                  <button className="bg-[#2A216D] text-white w-[40px] h-[40px] items-center text-xl rounded pl-[10px]">
                    <MdLink />
                  </button>
                  <button className="bg-[#2A216D] text-white w-[40px] h-[40px] items-center text-xl rounded pl-[10px]">
                    <LuDownload />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 border justify-between ml-4 px-5 py-3 rounded-md">
                <button className="  text-black text-[26px] ">
                <LuFileCheck />
                </button>
                <button className="text-black text-[26px]">
                <SlCalender />
                </button>
                <div className="relative group">
                  <button className="text-red-300 text-[24px]">
                  <TfiReload />

                  </button>
                  <span className="absolute hidden group-hover:inline-block bg-gray-800 text-white text-sm rounded-md px-2 py-1 top-[-2rem] left-1/2 transform -translate-x-1/2">
                    {service.status}
                  </span>
                </div>
                <button className="text-black text-[26px]">
                <LuFileCheck2 />
                </button>
                <button className="text-black text-[26px]">
                <PiFileImageDuotone />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Services */}
      <div>
        <h3 className="text-md font-semibold mb-4">Other Services</h3>
        {otherServices.map((service, index) => (
          <div
          key={index}
          className="grid grid-cols-2  border border-gray-200 rounded-md p-4 mb-6"
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-700">{service.title}</span>
            <div className="flex gap-2">
              <button className="bg-[#2A216D] text-white w-[40px] h-[40px] items-center text-xl rounded pl-[10px]">
                <MdLink />
              </button>
              <button className="bg-[#2A216D] text-white w-[40px] h-[40px] items-center text-xl rounded pl-[10px]">
                <LuDownload />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 border justify-between ml-4 px-5 py-3 rounded-md">
            <button className="  text-black text-[26px] ">
            <LuFileCheck />
            </button>
            <button className="text-black text-[26px]">
            <SlCalender />
            </button>
            <div className="relative group">
              <button className="text-red-300 text-[24px]">
              <TfiReload />

              </button>
              <span className="absolute hidden group-hover:inline-block bg-gray-800 text-white text-sm rounded-md px-2 py-1 top-[-2rem] left-1/2 transform -translate-x-1/2">
                {service.status}
              </span>
            </div>
            <button className="text-black text-[26px]">
            <LuFileCheck2 />
            </button>
            <button className="text-black text-[26px]">
            <PiFileImageDuotone />
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};
