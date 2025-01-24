import React from "react";
import { Table, Avatar } from "antd";

export const UpcomingAppoinment = () => {
  const data = [
    {
      key: "1",
      orderId: "#12333",
      orderDate: "12/04/24",
      client: { avatar: "https://i.pravatar.cc/150?img=1", name: "Jacob Jones" },
      address: "2464 Royal Ln. Mesa, New Jersey",
      items: 2,
      appointment: "12/04/24 at 3:00 pm",
    },
    {
      key: "2",
      orderId: "#12333",
      orderDate: "12/04/24",
      client: { avatar: "https://i.pravatar.cc/150?img=2", name: "Dianne Russell" },
      address: "3517 W. Gray St. Utica, Pennsylvania",
      items: 6,
      appointment: "08/04/24 at 5:00 pm",
    },
    {
      key: "3",
      orderId: "#12333",
      orderDate: "12/04/24",
      client: { avatar: "https://i.pravatar.cc/150?img=3", name: "Robert Fox" },
      address: "2715 Ash Dr. San Jose, South Dakota",
      items: 3,
      appointment: "02/04/24 at 4:00 pm",
    },
    {
        key: "3",
        orderId: "#12333",
        orderDate: "12/04/24",
        client: { avatar: "https://i.pravatar.cc/150?img=3", name: "Robert Fox" },
        address: "2715 Ash Dr. San Jose, South Dakota",
        items: 3,
        appointment: "02/04/24 at 4:00 pm",
      },
      {
        key: "3",
        orderId: "#12333",
        orderDate: "12/04/24",
        client: { avatar: "https://i.pravatar.cc/150?img=3", name: "Robert Fox" },
        address: "2715 Ash Dr. San Jose, South Dakota",
        items: 3,
        appointment: "02/04/24 at 4:00 pm",
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
      title: "Appointments",
      dataIndex: "appointment",
      key: "appointment",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-medium pt-3 pl-6">Upcoming Appointments</h2>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        bordered
        scroll={{
          y: 245, // Set height for scrollable area
        }}
        style={{ marginTop: "20px" , height:'300px' }}
      />
    </div>
  );
};
