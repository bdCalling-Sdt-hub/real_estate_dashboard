import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { FinishedFile } from "./FinishedFile";
import { FinishedFileComnt } from "./FinishedFileComnt";
import { useGetTaskDetailsQuery } from "../redux/api/taskApi";
import { Spin } from "antd";

export const ProjectFile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetTaskDetailsQuery(id);

  if (isLoading) {
    return (
      <div className="p-6 bg-white min-h-screen flex justify-center items-center">
        <Spin />
      </div>
    );
  }
  return (
    <div className="bg-white  p-5">
      <div className="grid gap-4 grid-cols-8">
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

          <div className="flex justify-between mt-7 w-full">
            <div className="flex gap-3 border-b">
              <div
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px 5px 0px 0px",
                  cursor: "pointer",
                  backgroundColor: "#F5ECF2",
                  color: "#9B3C7B",
                }}
              >
                All Files
              </div>
            </div>
          </div>
          {data?.data?.finishFile.length > 0 && (
            <div>
              <FinishedFile finishedFiles={data?.data?.finishFile} />
            </div>
          )}
        </div>
        <div className="col-span-2">
          <div>
            <FinishedFileComnt />
          </div>
        </div>
      </div>
    </div>
  );
};
