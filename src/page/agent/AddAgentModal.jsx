import React, { useState } from "react";
import { Form, Input, Checkbox, Modal, message, Spin } from "antd";
import { IoCameraOutline } from "react-icons/io5";
import { useAddAgentManagementMutation } from "../redux/api/agentApi";


export const AddAgentModal = ({ openAddModal, setOpenAddModal, singleClientAgentData,id }) => {

  
  const client = singleClientAgentData?.data?.map((agent) => ({
    id: agent?.clientId, 
  })) || [];
  
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const [addAgent] = useAddAgentManagementMutation();
  const [passError, setPassError] = useState("");
  const [image, setImage] = useState(null);  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);  
  };

const [permissions, setPermissions] = useState({
    place_an_order: false,
    can_see_all_order: false,
    can_see_assigned_order: false,
    can_see_pricing: false,
    can_add_new_agent: false,
    can_see_invoice: false,
  });
  console.log(permissions)

  const handleCheckboxChange = (key, checked) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };


  const handleSubmit = async (values) => {
  
    const formData = new FormData();
    // Append the form data
    const clientId = client.length > 0 ? client[0].id : '';

    formData.append("name", values.name);
    formData.append("clientId", id);
    
    formData.append("email", values.email);
    formData.append("phone_number", values.phone);
    formData.append("address", values.address);
    formData.append("password", values.newPassword);
    formData.append("confirmPassword", values.confirmPassword);
    formData.append("role", "AGENT"); 

    Object.keys(permissions).forEach((key) => {
      formData.append(key, permissions[key]);
    });

    if (image) {
      formData.append("profile_image", image);  
    }
    setLoading(true);
    try {
      const response = await addAgent( formData ).unwrap(); 
     message.success(response?.message)
     form.resetFields();
     setOpenAddModal(false);
    } catch (error) {
      message.error(error?.data?.message)
      console.error("Error adding agent:", error);

    }
    
    setLoading(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setFileList([]);
    setOpenAddModal(false);
  };

  return (
    <Modal
      centered
      open={openAddModal}
      onCancel={handleCancel}
      footer={null}
      width={600}
    >
      <div className="mb-6 mt-4">
        <h2 className="text-center font-bold text-lg mb-11">Add Agent</h2>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <div className="relative w-[140px] h-[140px] mx-auto mb-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="imgUpload"
              style={{ display: "none" }}
            />
            <img
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #e5e7eb",
              }}
              src={image ? URL.createObjectURL(image) : "https://via.placeholder.com/140"}
              alt="Agent Profile"
            />
            <label
              htmlFor="imgUpload"
              className="absolute bottom-6 right-6 bg-[#2A216D] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer border border-gray-300 shadow-sm text-xl"
            >
              <IoCameraOutline className="text-white" />
            </label>
          </div>

          <Form.Item
            label="Agent Name"
            name="name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input className="py-3" placeholder="Input here" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter the email" }]}
          >
            <Input className="py-3" placeholder="Input here" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter the address" }]}
          >
            <Input className="py-3" placeholder="Input here" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Please enter the phone number" }]}
          >
            <Input className="py-3" placeholder="Input here" />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label="New Password"
            rules={[{ required: true, message: "Please enter your new password" }]}
          >
            <Input.Password className="py-2" placeholder="Enter new password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm New Password"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Please confirm your new password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password className="py-2" placeholder="Confirm new password" />
          </Form.Item>
          <Form.Item label="Give Access To">
            <div className="flex flex-col gap-3">
              <Checkbox onChange={(e) => handleCheckboxChange("place_an_order", e.target.checked)}>
                Place an order
              </Checkbox>
              <Checkbox onChange={(e) => handleCheckboxChange("can_see_all_order", e.target.checked)}>
                Can see all orders
              </Checkbox>
              <Checkbox onChange={(e) => handleCheckboxChange("can_see_assigned_order", e.target.checked)}>
                Can see only their assigned orders
              </Checkbox>
              <Checkbox onChange={(e) => handleCheckboxChange("can_see_pricing", e.target.checked)}>
                Can see pricing
              </Checkbox>
              <Checkbox onChange={(e) => handleCheckboxChange("can_add_new_agent", e.target.checked)}>
                Can add new agents
              </Checkbox>
              <Checkbox onChange={(e) => handleCheckboxChange("can_see_invoice", e.target.checked)}>
                Can see invoicing
              </Checkbox>
            </div>
          </Form.Item>


          {passError && <p className="text-red-600 -mt-4 mb-2">{passError}</p>}

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-3 w-full border text-[#2A216D] rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-3 w-full bg-[#2A216D] text-white rounded-md"
              disabled={loading}
            >
              {loading ? (
                <Spin size="small" /> 
              ) : (
                "Add"
              )}
            </button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};
