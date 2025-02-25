import React, { useState } from "react";
import { Table, Button, Tag, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  useGetInvoiceQuery,
  usePayInvoiceMutation,
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
      render: (_id) => (
        <Button
          onClick={() => handlePayment(_id)}
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
    </div>
  );
};
