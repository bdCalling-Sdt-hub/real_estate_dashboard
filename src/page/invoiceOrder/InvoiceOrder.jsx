import React, { useState } from "react";
import { Table, Button, Tag, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const InvoiceOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      key: "1",
      orderId: "#12333",
      orderDate: "12/04/24",
      address: "2464 Royal Ln. Mesa, New Jersey",
      services: 5,
      total: "$546",
      status: "Invoiced",
      payment: "Pay Now",
    },
    {
      key: "2",
      orderId: "#12333",
      orderDate: "12/04/24",
      address: "3517 W. Gray St. Utica, Pennsylvania",
      services: 6,
      total: "$783",
      status: "Unpaid",
      payment: "Pay Now",
    },
    {
      key: "3",
      orderId: "#12333",
      orderDate: "12/04/24",
      address: "2715 Ash Dr. San Jose, South Dakota",
      services: 3,
      total: "$246",
      status: "Paid",
      payment: "Pay Now",
    },
    // Add more sample data as needed
  ];

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
      align: "center",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      align: "right",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => {
        let color;
        switch (status) {
          case "Paid":
            color = "green";
            break;
          case "Unpaid":
            color = "red";
            break;
          case "Invoiced":
            color = "gold";
            break;
          default:
            color = "blue";
        }
        return (
          <Tag
            color={color}
            style={{
              borderRadius: "50px",
              padding: "2px 20px",
              fontSize: "14px",
              textTransform: "capitalize",
            }}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Payment",
      dataIndex: "payment",
      key: "payment",
      align: "center",
      render: (payment) => (
        <Button
          style={{
            backgroundColor: "#2A216D",
            color: "white",
            borderRadius: "50px",
            fontSize: "14px",
          }}
        >
          {payment}
        </Button>
      ),
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 min-h-screen">
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
          <span className="text-lg font-semibold">Manage Invoices</span>
        </h1>
        <Input placeholder="Search here..." style={{ width: 300 }} />
      </div>
      
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          current: currentPage,
          pageSize: 10,
          total: 100, // Adjust the total number of records
          onChange: (page) => setCurrentPage(page),
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        bordered
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};
