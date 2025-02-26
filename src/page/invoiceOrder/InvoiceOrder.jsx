import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Tag,
  Input,
  message,
  Modal,
  Typography,
  Space,
} from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  useGetInvoiceQuery,
  usePayInvoiceMutation,
  useSavePaymentMutation,
} from "../redux/api/invoiceApi";
import { useSelector } from "react-redux";

export const InvoiceOrder = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const clientId = useSelector((state) => state.logInUser.clientId);
  const { data: invoiceData, isLoading } = useGetInvoiceQuery({
    page,
    limit,
    clientId,
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Date",
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
      title: "Total Orders",
      dataIndex: "orderIds",
      key: "orderIds",
      render: (orderIds) => orderIds?.length || 0,
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
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (_id, { status }) => {
        return (
          <Button
            onClick={() => handlePayment(_id)}
            disabled={status === "Paid"}
            style={{
              backgroundColor: status === "Paid" ? "#ccc" : "#2A216D",
              color: status === "Paid" ? "#666" : "white",
              borderRadius: "50px",
              fontSize: "14px",
              cursor: status === "Paid" ? "not-allowed" : "pointer",
              opacity: status === "Paid" ? 0.6 : 1,
            }}
          >
            Pay Now
          </Button>
        );
      },
    },
  ];
  const navigate = useNavigate();
  const [payInvoice] = usePayInvoiceMutation();
  const handlePayment = async (_id) => {
    try {
      const response = await payInvoice({ invoiceId: _id }).unwrap();
      if (response?.data?.url) {
        window.open(response?.data?.url, "_blank");
      } else {
        message.error("Payment failed!");
      }
    } catch (error) {
      console.error("Payment error:", error);
      message.error("Payment failed!");
    }
  };

  const [searchParams] = useSearchParams() || {};
  const stripe_session_id = searchParams.get("session_id");

  const [stripeModalOpen, setStripeModalOpen] = useState(false);

  useEffect(() => {
    if (stripe_session_id) {
      setStripeModalOpen(stripe_session_id);
    }
  }, [stripe_session_id]);
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
        loading={isLoading}
        style={{ marginTop: "20px" }}
      />
      <StripeSuccessModal open={stripeModalOpen} setOpen={setStripeModalOpen} />
    </div>
  );
};

const { Title, Text } = Typography;
const StripeSuccessModal = ({ open, setOpen }) => {
  const [savePayment] = useSavePaymentMutation();

  useEffect(() => {
    if (open) {
      savePayment({ session_id: open });
    }
  }, [open]);
  return (
    <Modal
      title={null}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      footer={[
        <div className="flex justify-center w-full mt-4">
          <Button key="close" type="primary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>,
      ]}
      style={{ textAlign: "center" }}
      centered
    >
      <Space
        direction="vertical"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Success Icon - Inline SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="80"
          height="80"
          style={{ marginBottom: "20px" }}
        >
          <circle cx="32" cy="32" r="30" fill="#52c41a" />
          <path
            d="M20 31.5l9 9 18-18"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Success Message */}
        <Title level={3} style={{ color: "#52c41a" }}>
          Payment Successful!
        </Title>

        <Text type="secondary">
          Your payment was processed successfully. Thank you for your order.
        </Text>
      </Space>
    </Modal>
  );
};
