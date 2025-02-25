import React from "react";
import { Table, Avatar } from "antd";
import { useGetUpcomingAppointmentQuery } from "../../page/redux/api/dashboardApi";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

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
      title: "Team Member",
      dataIndex: "member",
      key: "member",
      render: (member) => (
        <div className="flex items-center">
          <Avatar
            src={
              member?.[0]?.profile_image
                ? `${import.meta.env.VITE_BASE_URL}${
                    member?.[0]?.profile_image
                  }`
                : `https://ui-avatars.com/api/?name=${member?.[0]?.name}`
            }
            alt=""
          />
          <span style={{ marginLeft: 8 }}>{member?.[0]?.name}</span>
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
      render: (appointments) =>
        appointments != "N/A"
          ? dayjs(appointments).format("DD/MM/YYYY hh:mm A")
          : "No Appointments",
    },
  ];

  const clientId = useSelector((state) => state.logInUser.clientId);
  const { data: dashboardData, isLoading } =
    useGetUpcomingAppointmentQuery(clientId);
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
