import { Input } from "antd";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { ServicesPackeg } from "./ServicesPackeg";
import { ServicesPhoto } from "./ServicesPhoto";
import { ServicesVideos } from "./ServicesVideos";

export const ServicesTab = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div
            onClick={() => setSelectedTab("all")}
            className={`px-11 py-1  cursor-pointer ${
              selectedTab === "all"
                ? "bg-[#2A216D] text-[white] rounded-full "
                : "border border-[#2A216D] text-[#2A216D] rounded-full "
            }`}
          >
            Packages
          </div>
          <div
            onClick={() => setSelectedTab("submitted")}
            className={`px-11 py-1  cursor-pointer ${
              selectedTab === "submitted"
                ? "bg-[#2A216D] text-[white] rounded-full"
                : "border border-[#2A216D] text-[#2A216D] rounded-full "
            }`}
          >
            Photos
          </div>
          <div
            onClick={() => setSelectedTab("video")}
            className={`px-11 py-1  cursor-pointer ${
              selectedTab === "video"
                ? "bg-[#2A216D] text-[white] rounded-full"
                : "border border-[#2A216D] text-[#2A216D] rounded-full "
            }`}
          >
            Videos
          </div>
        </div>

        <Input placeholder="Search here..." style={{ width: 300 }} />
      </div>

      {selectedTab === "all" && (
        <div>
          <ServicesPackeg></ServicesPackeg>
        </div>
      )}
      {selectedTab === "submitted" && (
        <div>
          <ServicesPhoto></ServicesPhoto>
        </div>
      )}
      {selectedTab === "video" && (
        <div>
         <ServicesVideos></ServicesVideos>
        </div>
      )}
    </div>
  );
};
