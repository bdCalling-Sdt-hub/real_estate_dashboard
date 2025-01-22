import React from "react";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import details from '../../assets/header/details1.png'
export const MassageBox = () => {
  return (
    <div className="">
      <h2 className="text-lg mb-4">Message</h2>

      {/* Chat Container */}
      <div className=" border rounded-md p-4">
        {/* Incoming Message */}
        <div className="flex items-start mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <div className="bg-gray-200 text-gray-700 p-3 rounded-md max-w-md">
              Hi, How are you?
            </div>
            <span className="text-gray-400 text-sm mt-1 inline-block">11:15 AM</span>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex items-end justify-end mb-4">
          <div>
            <div className="bg-[#2A216D] text-white p-3 rounded-md max-w-md text-right">
              Hey! I saw your post about going on a road trip next week. Where are
              you headed?
            </div>
            <span className="text-gray-400 text-sm mt-1 inline-block">11:05 AM</span>
          </div>
        </div>

        {/* Message Input */}
        <div className="flex items-center mt-4 border-t pt-4">
          <Input
            placeholder="Message..."
            className="rounded-md py-3 border-[#2A216D]"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<SendOutlined />}
            className="ml-2 bg-[#2A216D]"
          />
        </div>
      </div>
      <div>
        <h1 className="mt-8 ">Upload File</h1>
        <div className="grid grid-cols-4 gap-4 mt-5">
            <img className="w-full rounded-md" src={details} alt="" />
            <img className="w-full rounded-md" src={details} alt="" />
            <img className="w-full rounded-md" src={details} alt="" />
            <img className="w-full rounded-md" src={details} alt="" />
        </div>
      </div>
    </div>
  );
};
