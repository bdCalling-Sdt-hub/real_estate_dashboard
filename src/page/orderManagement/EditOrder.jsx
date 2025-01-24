import React, { useState } from "react";
import {
  Form,
  Input,
  Radio,
  Checkbox,
  Button,
  Upload,
  Dropdown,
  Menu,
  Typography,
} from "antd";

import img1 from "../../assets/header/1.png";
import img2 from "../../assets/header/2.png";
import img3 from "../../assets/header/3.png";
import img4 from "../../assets/header/4.png";
import img5 from "../../assets/header/5.png";
import img6 from "../../assets/header/6.png";
import img7 from "../../assets/header/7.png";
import img8 from "../../assets/header/8.png";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

export const EditOrder = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("owner");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const menu = (
    <Menu>
      <Link to={"/dashboard/order-management/order-details/edit-order"}>
        <Menu.Item key="1">Edit Order</Menu.Item>
      </Link>
      <Menu.Item key="2"><Link to={'/dashboard/order-management/order-details/edit-services'}>Edit Services</Link></Menu.Item>
      <Menu.Item key="3">Cancel Order</Menu.Item>
    </Menu>
  );
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
          <span className="text-lg font-semibold">Edit Order</span>
        </h1>
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button
            className="border border-black rounded-full text-black flex items-center"
            onClick={(e) => e.preventDefault()}
          >
            Actions <HiOutlineDotsVertical className="ml-2" />
          </Button>
        </Dropdown>
      </div>
      <div className="p-8 max-w-4xl mx-auto  rounded-lg">
        <h1 className="text-2xl text-center mb-4 font-semibold">Edit Order</h1>

        {/* Client/Company Section */}

        {/* Address Details */}
        <h3 className="font-semibold text-lg mb-4">Address Details</h3>
        <Form layout="vertical">
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="zipCode"
              label="Zip Code"
              rules={[{ required: true }]}
            >
              <Input className="py-2" placeholder="Input here" />
            </Form.Item>
            <Form.Item
              name="streetNumber"
              label="Street Number"
              rules={[{ required: true }]}
            >
              <Input className="py-2" placeholder="Input here" />
            </Form.Item>
          </div>
          <Form.Item
            name="streetAddress"
            label="Street Address"
            rules={[{ required: true }]}
          >
            <Input className="py-2" placeholder="Input here" />
          </Form.Item>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item name="city" label="City" rules={[{ required: true }]}>
              <Input className="py-2" placeholder="Input here" />
            </Form.Item>
            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Input className="py-2" placeholder="Input here" />
            </Form.Item>
          </div>
          <Form.Item
            name="pickupKeys"
            label="Pickup keys at real estate office?"
          >
            <Radio.Group>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Radio.Group>
          </Form.Item>

          

          <div>
            <h1 className="text-xl font-semibold mb-2 -mt-1">Contact Info</h1>
            <Radio.Group
              value={selectedTab} // Bind the value to the state
              onChange={(e) => setSelectedTab(e.target.value)} // Update the state on change
            >
              <Radio value="owner">Please Contact Property Owner</Radio>
              <Radio value="agent">Please Contact Real Estate Agent</Radio>
            </Radio.Group>

            {selectedTab === "owner" && (
              <div>
                <Form layout="vertical">
                  <Form.Item
                    name="contactPreference"
                    label=""
                    initialValue="owner"
                  ></Form.Item>

                  <h1 className="text-xl font-semibold mb-2 -mt-7"> Property Owner Details</h1>
                  <Form.Item
                    label="Name Property Owner"
                    name="owner1Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input the name of the property owner!",
                      },
                    ]}
                  >
                    <Input className="py-2" placeholder="Input here" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="owner1Email"
                    rules={[
                      {
                        type: "email",
                        message: "Please enter a valid email address!",
                      },
                    ]}
                  >
                    <Input className="py-2" placeholder="Input here" />
                  </Form.Item>
                  <Form.Item
                    label="Mobile Phone"
                    name="owner1Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input the mobile phone number!",
                      },
                    ]}
                  >
                    <Input className="py-2" placeholder="Input here" />
                  </Form.Item>

                  
                </Form>
              </div>
            )}

            <div>
              <h1 className="text-xl font-semibold mb-3 mt-6">Linked real state agent</h1>
              <Form.Item name="linkedAgents">
                <Checkbox.Group>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img1} alt="" />
                        <span className="font-semibold">
                          Summit Realty Group
                        </span>
                      </div>
                    </Checkbox>
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img2} alt="" />
                        <span className="font-semibold">
                          Golden Key Properties
                        </span>
                      </div>
                    </Checkbox>
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img3} alt="" />
                        <span className="font-semibold">
                          Pinnacle Estates Co.
                        </span>
                      </div>
                    </Checkbox>
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img4} alt="" />
                        <span className="font-semibold">
                          Urban Oasis Realty
                        </span>
                      </div>
                    </Checkbox>
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img5} alt="" />
                        <span className="font-semibold">
                          Horizon Land Ventures
                        </span>
                      </div>
                    </Checkbox>
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img6} alt="" />
                        <span className="font-semibold">True North Homes</span>
                      </div>
                    </Checkbox>
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img7} alt="" />
                        <span className="font-semibold">
                          Evergreen Property Partners
                        </span>
                      </div>
                    </Checkbox>
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img8} alt="" />
                        <span className="font-semibold">
                          Cornerstone Realty Solutions
                        </span>
                      </div>
                    </Checkbox>
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img8} alt="" />
                        <span className="font-semibold">
                          Cornerstone Realty Solutions
                        </span>
                      </div>
                    </Checkbox>
                    <Checkbox>
                      {" "}
                      <div className="flex items-center gap-5">
                        <img className="w-[30px]" src={img8} alt="" />
                        <span className="font-semibold">
                          Cornerstone Realty Solutions
                        </span>
                      </div>
                    </Checkbox>
                  </div>
                </Checkbox.Group>
              </Form.Item>
            </div>
          </div>

          {/* File & Description */}
          <h3 className="font-semibold text-lg mb-4">File & Description</h3>
          <Form.Item label="Uploaded File">
            <div className="flex gap-4 items-center">
              <div>
                <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 5 && "+ Upload"}
                </Upload>
              </div>
            </div>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={4} placeholder="Input here" />
          </Form.Item>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              className="rounded w-72"
              onClick={() => console.log("Cancel")}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="rounded w-72 bg-[#2A216D]"
              onClick={() => console.log("Update")}
            >
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
