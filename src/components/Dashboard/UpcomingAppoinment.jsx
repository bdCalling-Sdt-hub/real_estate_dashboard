import React from "react";
import { Table, Avatar } from "antd";
import { useGetDashboardDataQuery } from "../../page/redux/api/dashboardApi";
import { useSelector } from "react-redux";
import parseJWT from "../../utils/parseJWT";

export const UpcomingAppoinment = () => {
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
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="" />
          <span style={{ marginLeft: 8 }}>Test Name</span>
        </div>
      ),
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
    },
    {
      title: "Appointments",
      dataIndex: "appointments",
      key: "appointments",
    },
  ];

  const token = useSelector((state) => state.logInUser.token);
  const { userId: clientId, authId } = parseJWT(token);

  const { data: dashboardData, isLoading } = useGetDashboardDataQuery(
    "67b2ee6abea0130fdd570d33"
  );
  return (
    <div>
      <h2 className="text-xl font-medium pt-3 pl-6">Upcoming Appointments</h2>
      <Table
        dataSource={dashboardData?.data}
        columns={columns}
        pagination={false}
        bordered
        scroll={{
          y: 245, // Set height for scrollable area
        }}
        loading={isLoading}
        style={{ marginTop: "20px", height: "300px" }}
      />
    </div>
  );
};
