import { Table, Avatar, Tag, Spin } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetRecentOrderQuery } from "../../page/redux/api/dashboardApi";
import dayjs from "dayjs";

export const RecentOrder = () => {
  const clientId = useSelector((state) => state.logInUser.clientId);
  const { data: dashboardData, isLoading } = useGetRecentOrderQuery(clientId);

  if (isLoading) {
    return (
      <div className="p-6 bg-white min-h-screen flex justify-center items-center">
        <Spin />
      </div>
    );
  }

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
      render: (date) =>
        date != "N/A" ? dayjs(date).format("DD/MM/YY") : "N/A",
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
              member[0].profile_image
                ? `${import.meta.env.VITE_BASE_URL}/${member[0].profile_image}`
                : `https://ui-avatars.com/api/?name=${member[0].name}`
            }
            alt={member[0].name}
          />
          <span style={{ marginLeft: 8 }}>{member[0].name}</span>
        </div>
      ),
    },
    {
      title: "Services",
      dataIndex: "services",
      key: "services",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (amount) =>
        `${Number(amount || 0).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`,
    },
    {
      title: "Appointments",
      dataIndex: "appointments",
      key: "appointments",
      render: (appointments) =>
        appointments != "N/A" ? dayjs(appointments).format("DD/MM/YY") : "N/A",
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
      dataIndex: "paymentStatus",
      key: "paymentStatus",
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
      key: "orderId",
      dataIndex: "orderId",
      render: (orderId) => (
        <div className="bg-[#2A216D] w-[30px] h-[30px] text-white flex justify-center items-center rounded">
          <Link to={`/dashboard/order-management/order-details/${orderId}`}>
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
        dataSource={dashboardData?.data}
        columns={columns}
        pagination={false}
        bordered
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};
