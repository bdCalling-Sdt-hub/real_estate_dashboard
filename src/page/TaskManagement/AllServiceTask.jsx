import React, { useState } from "react";
import { Table, Button, Avatar, Modal, Form, Input } from "antd";
import { PlusOutlined, EditOutlined, LinkOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const AllServiceTask = () => {
  const [opendetails, setOpendetails] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const navigate = useNavigate();
  const dataSource = [
    {
      key: "1",
      slNo: "01",
      productName: "Drone Photo",
      teamMember: null,
      link: "Link",
      file: "View",
    },
    {
      key: "2",
      slNo: "02",
      productName: "Floor plan",
      teamMember: null,
      link: "Link",
      file: "View",
    },
    {
      key: "3",
      slNo: "03",
      productName: "Twilight Photos",
      teamMember: null,
      link: "Link",
      file: "View",
    },
    {
      key: "4",
      slNo: "04",
      productName: "3D Matterport",
      teamMember: {
        name: "Annette Black",
        avatar: "https://via.placeholder.com/40",
      },
      link: "Link",
      file: "View",
    },
    {
      key: "5",
      slNo: "05",
      productName: "Cinematic Video",
      teamMember: {
        name: "Devon Lane",
        avatar: "https://via.placeholder.com/40",
      },
      link: "Link",
      file: "View",
    },
  ];

  const columns = [
    {
      title: "SL No",
      dataIndex: "slNo",
      key: "slNo",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Assign Team Member",
      dataIndex: "teamMember",
      key: "teamMember",
      render: (teamMember) =>
        teamMember ? (
          <div className="flex items-center">
            <Avatar src={teamMember.avatar} />
            <span className="ml-2">{teamMember.name}</span>
            <EditOutlined className="ml-2 text-purple-600 cursor-pointer" />
          </div>
        ) : (
          <Button onClick={() => setOpendetails(true)} type="link" className="text-purple-600">
            <PlusOutlined /> Assign
          </Button>
        ),
    },
    {
      title: "Edit Link",
      dataIndex: "link",
      key: "link",
      render: () => (
        <Button onClick={() => setLinkModal(true)} type="link" icon={<LinkOutlined />} className="text-purple-600">
          Link
        </Button>
      ),
    },
    {
      title: "Uploaded File",
      dataIndex: "file",
      key: "file",
      render: () => (
        <Link to={'/dashboard/task-management/all-Services/project-file'}><Button type="link" className="text-purple-600">
        View
      </Button></Link>
      ),
    },
  ];

  return (
    <div className="p-5 bg-white min-h-screen">
      <h1 onClick={() => navigate(-1)} className="flex gap-4 cursor-pointer">
        <button className="text-[#EF4849]">
          <FaArrowLeft />
        </button>
        <span className="text-lg font-semibold">All Services</span>
      </h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
        className="mt-5"
      />
      <Modal
        centered
        open={opendetails}
        onCancel={() => setOpendetails(false)}
        footer={null}
        width={600}
      >
        <div className="">
          <h2 className="text-center font-bold mb-8">Assign Team Member</h2>
          <Form layout="vertical" >
            <Form.Item
              label="Team Member"
              name="teamMember"
              rules={[
                { required: true, message: "Please enter a team Member" },
              ]}
            >
              <Input className="py-2" placeholder="Search here..."  />
            </Form.Item>
          </Form>

          <div className="flex  gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-3 w-full border text-[#2A216D] rounded-md"
              onClick={() => setOpendetails(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-3 w-full bg-[#2A216D] text-white rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        centered
        open={linkModal}
        onCancel={() => setLinkModal(false)}
        footer={null}
        width={600}
      >
        <div className="">
          <h2 className="text-center font-bold mb-8">Edit Link</h2>
          <Form layout="vertical" >
            <Form.Item
              label="File Link"
              name="teamMember"
              rules={[
                { required: true, message: "Please enter a team Member" },
              ]}
            >
              <Input className="py-2" placeholder="Search here..."  />
            </Form.Item>
          </Form>

          <div className="flex  gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-3 w-full border text-[#2A216D] rounded-md"
              onClick={() => setLinkModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-3 w-full bg-[#2A216D] text-white rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
