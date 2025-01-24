import React, { useState } from "react";
import { Select, Card, Badge, Input } from "antd";

import img from "../../assets/header/11.png";
import img1 from "../../assets/header/22.png";
import img2 from "../../assets/header/33.png";
import img3 from "../../assets/header/44.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const { Meta } = Card;
const { Option } = Select;

export const OrderManagement = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("newest");

  const data = [
    {
      key: "1",
      image: img,
      title: "Royal Ln. Mesa, New Jersey",
      purchasedServices: "Drone Photo & 2 Other Services",
      appointment: "12/08/24 at 2:00pm",
      completed: 2,
      inProduction: 1,
    },
    {
      key: "2",
      image: img1,
      title: "Gray St. Utica, Pennsylvania",
      purchasedServices: "Drone Photo & 2 Other Services",
      appointment: "12/08/24 at 2:00pm",
      completed: 2,
      inProduction: 1,
    },
    {
      key: "3",
      image: img2,
      title: "Ash Dr. San Jose, South Dakota",
      purchasedServices: "Drone Photo & 2 Other Services",
      appointment: "12/08/24 at 2:00pm",
      completed: 2,
      inProduction: 1,
    },
    {
      key: "4",
      image: img3,
      title: "Royal Ln. Mesa, New Jersey",
      purchasedServices: "Drone Photo & 2 Other Services",
      appointment: "12/08/24 at 2:00pm",
      completed: 2,
      inProduction: 1,
    },
    {
      key: "1",
      image: img,
      title: "Royal Ln. Mesa, New Jersey",
      purchasedServices: "Drone Photo & 2 Other Services",
      appointment: "12/08/24 at 2:00pm",
      completed: 2,
      inProduction: 1,
    },
    {
      key: "2",
      image: img1,
      title: "Gray St. Utica, Pennsylvania",
      purchasedServices: "Drone Photo & 2 Other Services",
      appointment: "12/08/24 at 2:00pm",
      completed: 2,
      inProduction: 1,
    },
    {
      key: "3",
      image: img2,
      title: "Ash Dr. San Jose, South Dakota",
      purchasedServices: "Drone Photo & 2 Other Services",
      appointment: "12/08/24 at 2:00pm",
      completed: 2,
      inProduction: 1,
    },
    {
      key: "4",
      image: img3,
      title: "Royal Ln. Mesa, New Jersey",
      purchasedServices: "Drone Photo & 2 Other Services",
      appointment: "12/08/24 at 2:00pm",
      completed: 2,
      inProduction: 1,
    },
  ];

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
        <Input placeholder="Search here..." style={{ width: 300 }} />
      </div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Showing {data.length} results</h2>
        <Select
          value={filter}
          onChange={(value) => setFilter(value)}
          style={{ width: 200 }}
        >
          <Option value="newest">Order date newest first</Option>
          <Option value="oldest">Order date oldest first</Option>
        </Select>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link key={item.key} to={'/dashboard/order-management/order-details'}>
          <Card
            
            cover={<img className="h-[220px]" alt={item.title} src={item.image} />}
            className="rounded-lg"
          >
            <Meta
              title={<h3 className="font-semibold text-lg">{item.title}</h3>}
              description={
                <div className="flex justify-between">
                  <div className="">
                    <p className="text-black">Purchased Services</p>
                    <p className="font-medium text-sm">
                      {item.purchasedServices.split(" ").slice(0, 2).join(" ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-black ">Upcoming Appointment</p>
                    <p className="font-medium text text-sm">{item.appointment}</p>
                  </div>
                </div>
              }
            />
            <div className="flex gap-4 mt-4 border-t -mx-6 px-3 pt-5">
              <h1 className="text-[#00A719] font-semibold">2 Completed</h1>
              <h1 className="text-[#F38E0A] font-semibold">1 In Production</h1>
            </div>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
