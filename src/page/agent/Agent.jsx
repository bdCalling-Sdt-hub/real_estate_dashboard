import React, { useState, useEffect } from "react";
import { Table, Avatar, Button, Input, Pagination, message, Modal } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { AddAgentModal } from "./AddAgentModal";
import { EditAgent } from "./EditAgent";

import { imageUrl } from "../redux/api/baseApi";
import { useDeleteAccountMutation, useGetSingleClientManagementQuery } from "../redux/api/agentApi";
import { useSelector } from "react-redux";
import { useGetProfileQuery } from "../redux/api/userApi";

export const Agent = () => {
    const{data:getProfile}=useGetProfileQuery();
console.log(getProfile?.data?.can_add_new_agent)
    const id = useSelector((state) => state.logInUser.clientId);
  
 console.log(id)
 
  const {
    data: singleClientAgentData,
    isLoading,
    error,
  } = useGetSingleClientManagementQuery(
     {id} ,
   
  );
  const[deleteClient] = useDeleteAccountMutation()
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openAddModal1, setOpenAddModal1] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const data =
    singleClientAgentData?.data?.map((agent, index) => ({
      key: agent?._id,
      slNo: `#${index + 1}`,
      name: agent?.name,
      authId: agent?.authId,
      email: agent?.email,
      phone: agent?.phone_number,
      address: agent?.address,
      profile_image: agent?.profile_image,
    })) || [];

  const handleEdit = (record) => {
    setSelectedCategory(record);
    setOpenAddModal1(true);
  };

  const handleDelete = (id) => {
 
    Modal.confirm({
      title: "Are you sure you want to delete this client?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          const response = await deleteClient(id.authId).unwrap();
          message.success(response.message);
        } catch (error) {
          message.error(error.data?.message);
        }
      },
    });
  };

  if (!getProfile?.data?.can_add_new_agent) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="bg-white p-8 rounded-lg  text-center">
          <h2 className="text-4xl font-semibold text-[#EF4849] mb-4">Access Denied</h2>
          <p className="text-lg mb-4">You do not have permission to add a new agent.</p>
         
        </div>
      </div>
    );
  }
  

  const columns = [
    {
      title: "SL No.",
      dataIndex: "slNo",
      key: "slNo",
      width: "8%",
    },
    {
      title: "Agent Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center">
          <Avatar
            src={`${imageUrl}/${record?.profile_image}`}
            alt={record?.name}
          />
          <span style={{ marginLeft: 8 }}>{record?.name}</span>
        </div>
      ),
      width: "20%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "30%",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      width: "15%",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div>
          <button
            onClick={() => handleEdit(record)}
            shape="circle"
            className="bg-[#2A216D] mr-2 h-10 w-10 rounded text-white text-xl"
          >
            <EditOutlined />
          </button>
          <button
            shape="circle"
            onClick={() => handleDelete(record)}
            className="bg-[#D80027] h-10 w-10 rounded text-white text-xl"
          >
            <DeleteOutlined />
          </button>
        </div>
      ),
      align: "end",
      width: "20%",
    },
  ];

  return (
    <div className="bg-white p-4 h-screen">
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
          <span className="text-lg font-semibold">Agent</span>
        </h1>
      </div>

      <div className="">
        <div>
          <button
            onClick={() => setOpenAddModal(true)}
            className="bg-[#2A216D] mb-8 text-[white] rounded px-11 py-2.5"
          >
            + New Agent
          </button>
        </div>
      </div>
      <Table dataSource={data} columns={columns} pagination={false} />

      <AddAgentModal
        singleClientAgentData={singleClientAgentData}
        id={id}
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
      ></AddAgentModal>
      <EditAgent
        openAddModal={openAddModal1}
        setOpenAddModal={setOpenAddModal1}
        selectAgentManagement={selectedCategory}
      ></EditAgent>
    </div>
  );
};
