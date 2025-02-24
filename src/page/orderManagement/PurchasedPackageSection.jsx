import { useState } from "react";
import { LuDownload, LuFileCheck, LuFileCheck2 } from "react-icons/lu";
import { MdLink } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiReload } from "react-icons/tfi";
import { PiFileImageDuotone } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { message } from "antd";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export const PurchasedPackageSection = ({ tasks }) => {
  const handleCopyLink = (files) => {
    files.forEach((file) => {
      try {
        navigator.clipboard.writeText(file.url);
        message.success("Link copied to clipboard");
      } catch (error) {
        console.log(error);
        message.error("Failed to copy link");
      }
    });
  };
  const handleDownload = (files) => {
    files.forEach((file) => {
      try {
        window.open(file.url, "_blank");
      } catch (error) {
        console.log(error);
        message.error("Failed to download file");
      }
    });
  };
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
          {tasks?.length > 0 &&
            tasks.map((service, index) => (
              <div key={index} className="grid grid-cols-2 gap-5 py-3">
                <div className="flex justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      {service?.serviceId?.title}
                    </span>
                  </div>

                  <TaskStatus status={service?.status} />
                </div>
                <div className="grid grid-cols-2 text-end">
                  <div className="flex justify-center">
                    <div className="">
                      <button
                        onClick={() => handleCopyLink(service?.finishFile)}
                        className="bg-[#F5ECF2] text-[#9B3C7B] px-5 flex  items-center  rounded-full py-1 gap-2 "
                      >
                        <MdLink className="text-xl" />
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDownload(service?.finishFile)}
                        className="bg-[#D80027] text-white w-[40px] h-[40px] items-center text-xl rounded pl-[10px]"
                      >
                        <LuDownload />
                      </button>
                      <Link
                        to={`/dashboard/task-management/all-Services/project-file/${service?._id}`}
                      >
                        <button className="bg-[#2A216D] text-white w-[40px] h-[40px] items-center text-xl rounded pl-[10px]">
                          <FaRegEye />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const TaskStatus = ({ status }) => {
  const getStatusColor = (field) => {
    if (field === status) {
      return "text-[#2A216D]";
    } else {
      return "text-[#BDBAD2]";
    }
  };
  return (
    <div className="flex items-center space-x-11 border justify-between ml-4 px-5 py-2 rounded-md">
      <button className="relative text-black text-[26px] group">
        <LuFileCheck className={getStatusColor("Submitted")} />
        <PopOver status="Submitted" activeStatus={status} />
      </button>
      <button className="relative text-black text-[26px] group">
        <SlCalender className={getStatusColor("Scheduled")} />
        <PopOver status="Scheduled" activeStatus={status} />
      </button>
      <button className="relative text-red-300 text-[24px] group">
        <TfiReload className={getStatusColor("Pending")} />
        <PopOver status="Pending" activeStatus={status} />
      </button>
      <button className="relative text-black text-[26px] group">
        <LuFileCheck2 className={getStatusColor("Delivered")} />
        <PopOver status="Delivered" activeStatus={status} />
      </button>
      <button className="relative text-black text-[26px] group">
        <PiFileImageDuotone className={getStatusColor("Revisions")} />
        <PopOver status="Revisions" activeStatus={status} />
      </button>
      <button className="relative text-black text-[26px] group">
        <IoCheckmarkDoneCircleSharp className={getStatusColor("Completed")} />
        <PopOver status="Completed" activeStatus={status} />
      </button>
    </div>
  );
};

const PopOver = ({ status, activeStatus }) => {
  const active = status === activeStatus;
  if (active) {
    return (
      <span className="absolute block border border-[#9D99BC] bg-white text-[#2A216D] text-sm rounded-md px-3 py-1 top-[-3rem] w-[100px] left-1/2 transform -translate-x-1/2">
        {status}
        <span className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-t-[#9D99BC] border-transparent"></span>
      </span>
    );
  } else {
    return (
      <span className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded-md px-2 py-1 top-[-2rem] w-[100px] left-1/2 transform -translate-x-1/2">
        {status}
      </span>
    );
  }
};
