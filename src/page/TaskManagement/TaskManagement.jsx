import { Input } from 'antd';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { Table, Button } from "antd";

export const TaskManagement = () => {
  const data = [
    {
      key: "1",
      orderId: "#12333",
      appointmentDate: "12/04/24 at 3:00 pm",
      companyName: "Louis Vuitton",
      logo: "https://via.placeholder.com/20",
      address: "2464 Royal Ln. Mesa, New Jersey",
      services: "5",
    },
    {
      key: "2",
      orderId: "#12333",
      appointmentDate: "08/04/24 at 5:00 pm",
      companyName: "Bank of America",
      logo: "https://via.placeholder.com/20",
      address: "3517 W. Gray St. Utica, Pennsylvania",
      services: "6",
    },
    {
      key: "3",
      orderId: "#12333",
      appointmentDate: "02/04/24 at 4:00 pm",
      companyName: "Nintendo",
      logo: "https://via.placeholder.com/20",
      address: "2715 Ash Dr. San Jose, South Dakota",
      services: "3",
    },
    {
      key: "4",
      orderId: "#12333",
      appointmentDate: "02/04/24 at 4:00 pm",
      companyName: "McDonald's",
      logo: "https://via.placeholder.com/20",
      address: "2715 Ash Dr. San Jose, South Dakota",
      services: "2",
    },
    {
      key: "5",
      orderId: "#12333",
      appointmentDate: "02/04/24 at 4:00 pm",
      companyName: "Pizza Hut",
      logo: "https://via.placeholder.com/20",
      address: "2715 Ash Dr. San Jose, South Dakota",
      services: "4",
    },
  ];

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      width: "10%",
    },
    {
      title: "Appointment Date",
      dataIndex: "appointmentDate",
      key: "appointmentDate",
      width: "20%",
    },
    {
      title: "Company/Client",
      dataIndex: "companyName",
      key: "companyName",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={record.logo}
            alt={text}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          {text}
        </div>
      ),
      width: "20%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "25%",
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
      align: "center",
      width: "10%",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Link to={'/dashboard/task-management/all-Services'}>
        <Button
          type="primary"
          style={{ backgroundColor: "#EAD9DF", border: "none", color: "#7A3E48" }}
        >
          View
        </Button></Link>
      ),
      align: "end",
      width: "15%",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className='bg-white p-4 h-screen'>
      <div
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px",
        }}
      >
        <h1 onClick={() => navigate(-1)} className="flex gap-4 cursor-pointer">
          <button className="text-[#EF4849]">
            <FaArrowLeft />
          </button>
          <span className="text-lg font-semibold">Task Management</span>
        </h1>
        <Input placeholder="Search here..." style={{ width: 300 }} />
      </div>

      <div className="">
        <Table
          dataSource={data}
          columns={columns}
          pagination={{
            pageSize: 7,
            showSizeChanger: true,
            pageSizeOptions: ["7", "10", "20"],
          }}
          bordered
          style={{ marginTop: "20px" }}
        />
      </div>
    </div>
  );
};