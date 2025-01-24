import React from "react";
import { Table, Avatar, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const RecentOrder = () => {
  const data = [
    {
      key: "1",
      orderId: "#12333",
      orderDate: "12/04/24",
      client: { avatar: "https://i.pravatar.cc/150?img=1", name: "Jacob Jones" },
      address: "2464 Royal Ln. Mesa, New Jersey",
      items: 2,
      total: "$546",
      appointment: "12/04/24 at 3:00 pm",
      status: "Completed",
      payment: "Paid",
    },
    {
      key: "2",
      orderId: "#12333",
      orderDate: "12/04/24",
      client: { avatar: "https://i.pravatar.cc/150?img=2", name: "Dianne Russell" },
      address: "3517 W. Gray St. Utica, Pennsylvania",
      items: 6,
      total: "$783",
      appointment: "08/04/24 at 5:00 pm",
      status: "Completed",
      payment: "Paid",
    },
    {
      key: "3",
      orderId: "#12333",
      orderDate: "12/04/24",
      client: { avatar: "https://i.pravatar.cc/150?img=3", name: "Robert Fox" },
      address: "2715 Ash Dr. San Jose, South Dakota",
      items: 3,
      total: "$246",
      appointment: "02/04/24 at 4:00 pm",
      status: "Completed",
      payment: "Invoiced",
    },
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
      title: "Agent",
      dataIndex: "client",
      key: "client",
      render: (client) => (
        <div className="flex items-center">
          <Avatar src={client.avatar} alt={client.name} />
          <span style={{ marginLeft: 8 }}>{client.name}</span>
        </div>
      ),
    },
    {
      title: "Services",
      dataIndex: "items",
      key: "items",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Appointments",
      dataIndex: "appointment",
      key: "appointment",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = status === "Completed" ? "#D992B8" : "default";
        return (
          <Tag
            style={{
              borderRadius: "20px",
              backgroundColor: "white",
              color,
              border: `1px solid ${color}`,
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
      render: (payment) => {
        let color = payment === "Paid" ? "#A7F3D0" : "#FDE68A";
        let textColor = payment === "Paid" ? "#1D4E35" : "#92400E";
        return (
          <Tag
            style={{
              borderRadius: "20px",
              backgroundColor: color,
              color: textColor,
              border: "none",
            }}
          >
            {payment}
          </Tag>
        );
      },
    },
    {
      title: "Details",
      key: "details",
      render: () => (
        <div
          className="bg-[#2A216D] w-[30px] h-[30px] text-white flex justify-center items-center rounded"
        >
          <Link to={"/dashboard/order-management/order-details"}>
            <EyeOutlined />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-medium pt-3 pl-6">Recent Delivered Order</h2>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        bordered
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};
