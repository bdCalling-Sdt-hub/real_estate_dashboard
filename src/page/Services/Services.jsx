import { Input } from "antd";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Photo } from "./Photo";
import { Videos } from "./Videos";

export const Services = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="bg-white h-screen p-4">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 onClick={() => navigate(-1)} className="flex gap-4 cursor-pointer">
          <button className="text-[#EF4849]">
            <FaArrowLeft />
          </button>
          <span className="text-lg font-semibold">Manage Ticket</span>
        </h1>
        <Input placeholder="Search here..." style={{ width: 300 }} />
      </div>

      <div className="flex justify-between">
        <div className="flex gap-3">
          <div
            onClick={() => setSelectedTab("all")}
            className={`px-11 py-2.5  cursor-pointer ${
              selectedTab === "all"
                ? "bg-[#2A216D] text-[white] rounded "
                : "border border-[#2A216D] text-[#2A216D] rounded "
            }`}
          >
            Photo
          </div>
          <div
            onClick={() => setSelectedTab("submitted")}
            className={`px-11 py-2.5  cursor-pointer ${
              selectedTab === "submitted"
                ? "bg-[#2A216D] text-[white] rounded"
                : "border border-[#2A216D] text-[#2A216D] rounded "
            }`}
          >
            Video
          </div>
        </div>
        <div>
          <button className="bg-[#2A216D] text-[white] rounded px-11 py-2.5">
            + New Services
          </button>
        </div>
      </div>

      {selectedTab === "all" && (
        <div>
          <Photo></Photo>
        </div>
      )}
      {selectedTab === "submitted" && (
        <div>
          <Videos></Videos>
        </div>
      )}
    </div>
  );
};
