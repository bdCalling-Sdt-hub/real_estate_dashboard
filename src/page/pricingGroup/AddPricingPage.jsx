import React, { useState } from "react";
import { Form, Input, Button, Table, Space } from "antd";
import img from "../../assets/header/5.png";
import img1 from "../../assets/header/6.png";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
export const AddPricingPage = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([
    { id: 1, name: "Horizon Land Ventures", logo: img },
    { id: 2, name: "True North Homes", logo: img1 },
  ]);

  const [services, setServices] = useState([
    { id: 1, name: "HD Photos" },
    { id: 2, name: "Twilight Video" },
    { id: 3, name: "Floor Plan" },
    { id: 4, name: "HD Videos" },
  ]);

  const pricingTableData = [
    {
      key: 1,
      product: "HD Photos",
      defaultPrice: "$580",
      pricingGroupPrice: "$520",
    },
    {
      key: 2,
      product: "HD Videos",
      defaultPrice: "$1080",
      pricingGroupPrice: "$950",
    },
    {
      key: 3,
      product: "Drone Photo",
      defaultPrice: "$750",
      pricingGroupPrice: "$660",
    },
    {
      key: 4,
      product: "Twilight Video",
      defaultPrice: "$950",
      pricingGroupPrice: "$880",
    },
    {
      key: 5,
      product: "Floor Plan",
      defaultPrice: "$1280",
      pricingGroupPrice: "$1150",
    },
  ];

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Default Price",
      dataIndex: "defaultPrice",
      key: "defaultPrice",
    },
    {
      title: "Pricing Group Price",
      dataIndex: "pricingGroupPrice",
      key: "pricingGroupPrice",
      render: (text) => <Input defaultValue={text} />,
    },
  ];

  return (
    <div className="bg-white p-4">
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
          <span className="text-lg font-semibold">Manage Ticket</span>
        </h1>
        <Input placeholder="Search here..." style={{ width: 300 }} />
      </div>
      <div className="p-8 max-w-5xl mx-auto ">
        <h1 className="text-2xl font-semibold mb-6">Add Pricing Group</h1>

        {/* Pricing Group Name */}
        <Form layout="vertical">
          <Form.Item label="Pricing Group Name" name="pricingGroupName">
            <Input className="py-2" placeholder="Input here" />
          </Form.Item>

          {/* Associated Customers */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Associated Customers</h3>
            <div className=" items-center mb-4 ">
              <Input
                className="py-2 relative pr-12"
                placeholder="Search for a client/company"
              />
              <button
                className="absolute -ml-10 mt-2 bg-white text-[#2A216D] shadow-none "
                type="primary"
              >
                Add
              </button>
            </div>
            <ul>
              {customers.map((customer) => (
                <li
                  key={customer.id}
                  className="flex items-center justify-between mb-2"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      className="w-8 h-8 rounded"
                    />
                    <span>{customer.name}</span>
                  </div>
                  <Button
                    type="link"
                    danger
                    onClick={() =>
                      setCustomers(
                        customers.filter((c) => c.id !== customer.id)
                      )
                    }
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex justify-end">
              <button className="mt-4 bg-[#2A216D] text-white p-2 rounded">
                Save Customers
              </button>
            </div>
          </div>

          {/* Add Services/Products */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">
              Add Services/Products
            </h3>
            <div className="  mb-4">
              <Input
                className="py-2 relative pr-12"
                placeholder="Search for a client/company"
              />
              <button
                className="absolute -ml-10 mt-2 bg-white text-[#2A216D] shadow-none "
                type="primary"
              >
                Add
              </button>
            </div>
            <ul>
              {services.map((service) => (
                <li
                  key={service.id}
                  className="flex border-b py-2 justify-between items-center mb-2"
                >
                  <span>{service.name}</span>
                  <Button
                    type="link"
                    danger
                    onClick={() =>
                      setServices(services.filter((s) => s.id !== service.id))
                    }
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex justify-end">
              <button className="mt-4 bg-[#2A216D] text-white p-2 rounded">
                Save Services
              </button>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Pricing Table</h3>
            <div className="border rounded">
              <Table
                columns={columns}
                dataSource={pricingTableData}
                pagination={false}
                bordered
              />
            </div>
            <div className="flex justify-end">
              <button className="mt-4 bg-[#2A216D] text-white p-2 rounded">
                Save Pricing Table
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
