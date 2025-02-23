import React, { useState } from "react";
import { Table, Button, Tag, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useGetInvoiceQuery } from "../redux/api/invoiceApi";
export const InvoiceOrder = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: invoiceData, isLoading } = useGetInvoiceQuery({
    page,
    limit,
    clientId: "67b2ee6abea0130fdd570d33",
  });

  console.log(invoiceData);

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
      dataIndex: "orderIds",
      key: "orderIds",
      render: (orderIds) => orderIds.map((order) => order._id).join(", "),
    },
    {
      title: "Order Date",
      dataIndex: "date",
      key: "date",
      render: (date) =>
        new Date(date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
    },
    {
      title: "Address",
      dataIndex: "orderIds",
      key: "orderIds",
      render: (orderIds) =>
        orderIds
          .map(
            (order) =>
              `${order.address.zipCode}, ${order.address.streetName}, ${order.address.streetAddress}, ${order.address.city}`
          )
          .join(", "),
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
      align: "center",
    },
    {
      title: "Total",
      dataIndex: "totalAmount",
      key: "totalAmount",
      align: "right",
      render: (totalAmount) =>
        Number(totalAmount).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
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
          Pay Now
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
        dataSource={invoiceData?.data?.data}
        columns={columns}
        pagination={{
          current: page,
          pageSize: limit,
          total: invoiceData?.data?.meta?.total,
          onChange: (page) => setPage(page),
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        bordered
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};
