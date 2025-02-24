import React, { useState } from "react";
import { Select, Card, Badge, Input, Spin } from "antd";

import img from "../../assets/header/11.png";
import img1 from "../../assets/header/22.png";
import img2 from "../../assets/header/33.png";
import img3 from "../../assets/header/44.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useGetAllOrdersQuery } from "../redux/api/ordersApi";
import dayjs from "dayjs";

const { Meta } = Card;
const { Option } = Select;

export const OrderManagement = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("newest-first");
  const [searchTerm, setSearchTerm] = useState("");
  const clientId = useSelector((state) => state.logInUser.clientId);
  const { data: orders, isLoading } = useGetAllOrdersQuery({
    clientId,
    searchTerm,
    filter,
  });

  if (isLoading) {
    return (
      <div className="p-6 bg-white flex justify-center items-center h-screen">
        <Spin />
      </div>
    );
  }
  return (
    <div className="p-6 bg-white">
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
        <Input
          placeholder="Search here..."
          style={{ width: 300 }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Showing {orders?.data?.length || 0} results
        </h2>
        <Select
          value={filter}
          onChange={(value) => setFilter(value)}
          style={{ width: 200 }}
        >
          <Option value="newest-first">Order date newest first</Option>
          <Option value="oldest-first">Order date oldest first</Option>
          <Option value="appointment-newest-first">
            Appointment date newest first
          </Option>
          <Option value="appointment-oldest-first">
            Appointment date oldest first
          </Option>
        </Select>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {orders?.data?.length > 0 &&
          orders?.data?.map((item) => (
            <Link
              key={item._id}
              to={`/dashboard/order-management/order-details/${item._id}`}
            >
              <Card
                cover={
                  <img
                    className="h-[220px] object-cover"
                    alt=""
                    src={item.image[0]}
                  />
                }
                className="rounded-lg"
              >
                <Meta
                  title={
                    <h3 className="font-semibold text-lg">{`${item?.address?.zipCode}, ${item?.address?.streetName}, ${item?.address?.streetAddress}, ${item?.address?.city}`}</h3>
                  }
                  description={
                    <div className="flex justify-between">
                      <div className="">
                        <p className="text-black">Purchased Services</p>
                        <p className="font-medium text-sm truncate max-w-[100px]">
                          {item.taskIds.map((task) => task.name).join(", ")}
                        </p>
                      </div>
                      <div>
                        <p className="text-black ">Upcoming Appointment</p>
                        <p className="font-medium text text-sm">
                          {dayjs(item.schedule.startTime).format(
                            "DD/MM/YYYY at hh:mmA"
                          )}
                        </p>
                      </div>
                    </div>
                  }
                />
                <div className="flex gap-4 mt-4 border-t -mx-6 px-3 pt-5">
                  <h1 className="text-[#00A719] font-semibold">
                    {item?.taskStatusCount?.Completed || 0} Completed
                  </h1>
                  <h1 className="text-[#F38E0A] font-semibold">
                    {item?.taskStatusCount?.["In-Production"] || 0} In
                    Production
                  </h1>
                </div>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
};
