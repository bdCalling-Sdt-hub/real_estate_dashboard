import React from "react";
import { LuDownload, LuFileCheck, LuFileCheck2 } from "react-icons/lu";
import { MdLink } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiReload } from "react-icons/tfi";
import { PiFileImageDuotone } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    {
      title: "Drone Photo",
      status: "In Production",
    },
  ];

  

  return (
    <div className=" mt-8 ">
      <h2 className="text-lg font-semibold mb-3 rounded-md">
        Purchased Package/Services
      </h2>

      {/* Package Services */}
      <div className="mb-6">
        
        <div className="border px-4 py-4 rounded">
          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <div className="grid grid-cols-2">
                <h1 className="font-semibold text-lg">Package/Service</h1>
                <h1 className="text-center font-semibold text-lg">Status</h1>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2">
                <h1 className="text-center font-semibold text-lg">Link</h1>
                <h1 className="text-end font-semibold text-lg">File</h1>
              </div>
            </div>
          </div>
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-2 gap-5 py-3">
              <div className="flex justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">{service.title}</span>
                </div>

                <div className="flex items-center space-x-11 border justify-between ml-4 px-5 py-2 rounded-md">
                  <button className="  text-slate-400 text-[20px] ">
                    <LuFileCheck />
                  </button>
                  <button className="text-slate-400 text-[20px]">
                    <SlCalender />
                  </button>
                  <div className="relative group">
                    <button className="text-black text-[24px]">
                      <TfiReload />
                    </button>
                    <span className="absolute hidden group-hover:inline-block bg-gray-800 text-white text-sm rounded-md px-2 py-1 top-[-2rem] left-1/2 transform -translate-x-1/2">
                      {service.status}
                    </span>
                  </div>
                  <button className="text-slate-400 text-[20px]">
                    <LuFileCheck2 />
                  </button>
                  <button className="text-slate-400 text-[20px]">
                    <PiFileImageDuotone />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 text-end">
                <div className="flex justify-center">
                  <div className="">
                    <button className="bg-[#F5ECF2] text-[#9B3C7B] px-5 flex  items-center  rounded-full py-1 gap-2 ">
                      <MdLink className="text-xl"/>Copy
                    </button>
                    
                  </div>
                </div>
                <div className="flex justify-end">
                <div className="flex gap-2">
                  <button className="bg-[#D80027] text-white w-[40px] h-[40px] items-center text-xl rounded pl-[10px]">
                    <LuDownload />
                  </button>
                  <Link to={'/dashboard/task-management/all-Services/project-file'}><button className="bg-[#2A216D] text-white w-[40px] h-[40px] items-center text-xl rounded pl-[10px]">
                    <FaRegEye />
                    
                  </button></Link>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Services */}
      {/* <div>
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
      </div> */}
    </div>
  );
};
