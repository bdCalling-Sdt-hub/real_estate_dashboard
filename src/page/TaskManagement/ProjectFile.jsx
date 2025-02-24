import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FinishedFile } from "./FinishedFile";
import { FinishedFileComnt } from "./FinishedFileComnt";
import { HighlightVideo } from "./HighlightVideo";
import { ChinematicVideo } from "./ChinematicVideo";
import { DronePhoto } from "./DronePhoto";

export const ProjectFile = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("all");
  return (
    <div className="bg-white  p-5">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-6">
          <h1 className="flex gap-4 ">
            <button onClick={() => navigate(-1)} className="text-[#EF4849]">
              <FaArrowLeft />
            </button>
            <span
              onClick={() => navigate(-1)}
              className="text-lg cursor-pointer font-semibold"
            >
              Project Files
            </span>
          </h1>

          <div className="flex justify-between mt-7">
            <div className="flex gap-3 border-b">
              <div
                onClick={() => setSelectedTab("all")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px 5px 0px 0px",
                  cursor: "pointer",
                  backgroundColor: selectedTab === "all" ? "#F5ECF2" : "white",
                  color: selectedTab === "all" ? "#9B3C7B" : "black",
                }}
              >
                Drone Photo
              </div>
              <div
                onClick={() => setSelectedTab("submitted")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px 5px 0px 0px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedTab === "submitted" ? "#F5ECF2" : "white",
                  color: selectedTab === "submitted" ? "#9B3C7B" : "black",
                }}
              >
                Twilight Photos
              </div>
              <div
                onClick={() => setSelectedTab("highlight")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px 5px 0px 0px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedTab === "highlight" ? "#F5ECF2" : "white",
                  color: selectedTab === "highlight" ? "#9B3C7B" : "black",
                }}
              >
                Highlight Video
              </div>
              <div
                onClick={() => setSelectedTab("cinematic")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px 5px 0px 0px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedTab === "cinematic" ? "#F5ECF2" : "white",
                  color: selectedTab === "cinematic" ? "#9B3C7B" : "black",
                }}
              >
                Cinematic Video
              </div>
            </div>
          </div>
          {selectedTab === "all" && (
            <div>
              <DronePhoto></DronePhoto>
            </div>
          )}
          {selectedTab === "submitted" && (
            <div>
              <FinishedFile></FinishedFile>
            </div>
          )}
          {selectedTab === "highlight" && (
            <div>
              <HighlightVideo></HighlightVideo>
            </div>
          )}
          {selectedTab === "cinematic" && (
            <div>
              <ChinematicVideo></ChinematicVideo>
            </div>
          )}
        </div>
        <div className="col-span-2">
          {selectedTab === "all" && (
            <div>
              <FinishedFileComnt></FinishedFileComnt>
            </div>
          )}

          {selectedTab === "submitted" && (
            <div>
              <FinishedFileComnt></FinishedFileComnt>
            </div>
          )}

          {selectedTab === "highlight" && (
            <div>
              <FinishedFileComnt></FinishedFileComnt>
            </div>
          )}
          {selectedTab === "cinematic" && (
            <div>
              <FinishedFileComnt></FinishedFileComnt>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
