import React from "react";
import { CheckOutlined, EyeOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const TaskManagementPage = () => {
  const tasks = [
    {
      date: "Sunday, 18 January, 2025",
      tasks: [
        { type: "Photography", location: "Westheimer Rd. Santa Ana, Illinois 85" },
        { type: "Video", location: "Gray St. Utica, Pennsylvania 57867" },
        { type: "Floorplans", location: "Westheimer Rd. Santa Ana, Illinois 85" },
        { type: "Photography", location: "Elgin St. Celina, Delaware 10299" },
      ],
    },
    {
      date: "Sunday, 18 January, 2025",
      tasks: [
        { type: "Video", location: "Elgin St. Celina, Delaware 10299" },
        { type: "Floorplans", location: "Gray St. Utica, Pennsylvania 57867" },
        { type: "Photography", location: "Westheimer Rd. Santa Ana, Illinois 85" },
      ],
    },
  ];

  const toDoList = [
    { date: "16/05/24", description: "Empty the SD card" },
    { date: "12/04/24", description: "Empty the SD card" },
    { date: "07/04/24", description: "Empty the SD card" },
    { date: "15/03/24", description: "Empty the SD card" },
  ];

  return (
    <div className="p-6 bg-white">
      <div className="grid grid-cols-2 gap-6">
        {/* Assigned to Me Section */}
        <div className="p-4  bg-white ">
          <h3 className="text-center font-semibold text-[#9B3C7B] border border-[#9B3C7B] p-3 mb-3">
            Assigned To Me
          </h3>
          <div className="overflow-y-auto" style={{ maxHeight: "300px" }}>
            {tasks.map((task, index) => (
              <div key={index} className="mb-4 border py-5">
                <div className="bg-[#F38E0A] text-white text-center  w-[400px] m-auto rounded-full py-2 font-semibold">
                  {task.date}
                </div>
                <div className=" p-3 rounded-b-lg">
                  {task.tasks.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center mb-2  pb-2"
                    >
                      <div>
                        <p className="font-semibold">{item.type}</p>
                        <p className="text-sm text-gray-600">{item.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="bg-green-500 text-white p-2 rounded-full">
                          <CheckOutlined />
                        </button>
                        <Link to={'/dashboard/task-management'}><button className="bg-blue-500 text-white p-2 rounded-full">
                          <EyeOutlined />
                        </button></Link>
                        <button className="bg-red-500 text-white p-2 rounded-full">
                          <DeleteOutlined />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Production Work Section */}
        <div className="p-4  bg-white ">
          <h3 className="text-center font-semibold text-[#9B3C7B] border border-[#9B3C7B] p-3 mb-3">
            Open Production Work
          </h3>
          <div className="overflow-y-auto" style={{ maxHeight: "300px" }}>
            {tasks.map((task, index) => (
              <div key={index} className="border py-5">
                <div className="bg-[#F38E0A] text-white text-center  w-[400px] m-auto rounded-full py-2 font-semibold">
                  {task.date}
                </div>
                <div className=" p-3 ">
                  {task.tasks.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center mb-2 pb-2"
                    >
                      <div>
                        <p className="font-semibold">{item.type}</p>
                        <p className="text-sm text-gray-600">{item.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="bg-purple-500 text-white px-4 py-1 rounded-lg">
                          Take
                        </button>
                        <button className="bg-blue-500 text-white p-2 rounded-full">
                          <EyeOutlined />
                        </button>
                        <button className="bg-orange-500 text-white p-2 rounded-full">
                          <DeleteOutlined />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* To Do List and Upload Source Files */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* To Do List Section */}
        <div className="p-4  rounded-lg bg-white">
          <h3 className="text-center font-semibold text-[#9B3C7B] border border-[#9B3C7B] p-3 mb-3">
            To Do List <button className="text-orange-500">+</button>
          </h3>
          <div className="overflow-y-auto border py-5" style={{ maxHeight: "300px" }}>
            {toDoList.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2  pb-2"
              >
                <p>{item.date}</p>
                <p className="flex-1 text-center">{item.description}</p>
                <div className="flex items-center gap-2">
                  <button className="bg-green-500 text-white p-2 rounded-full">
                    <CheckOutlined />
                  </button>
                  <button className="bg-blue-500 text-white p-2 rounded-full">
                    <EyeOutlined />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Source Files Section */}
        <div className="p-4  bg-white ">
          <h3 className="text-center font-semibold text-[#9B3C7B] border border-[#9B3C7B] p-3 mb-3">
            Upload Source Files
          </h3>
          <div className="overflow-y-auto" style={{ maxHeight: "300px" }}>
            {tasks.map((task, index) => (
              <div key={index} className="mb-4 border py-5">
                <div className="bg-[#F38E0A] text-white text-center  w-[400px] m-auto rounded-full py-2 font-semibold">
                  {task.date}
                </div>
                <div className=" p-3">
                  {task.tasks.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center mb-2 pb-2"
                    >
                      <div>
                        <p className="font-semibold">{item.type}</p>
                        <p className="text-sm text-gray-600">{item.location}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="bg-green-500 text-white p-2 rounded-full">
                          <CheckOutlined />
                        </button>
                        <button className="bg-orange-500 text-white p-2 rounded-full">
                          <UploadOutlined />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
