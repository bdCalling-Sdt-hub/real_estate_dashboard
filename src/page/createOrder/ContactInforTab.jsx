import React, { useState } from 'react';
import { Form, Input, Radio, Checkbox, Typography } from 'antd';
import img1 from "../../assets/header/1.png";
import img2 from "../../assets/header/2.png";
import img3 from "../../assets/header/3.png";
import img4 from "../../assets/header/4.png";
import img5 from "../../assets/header/5.png";
import img6 from "../../assets/header/6.png";
import img7 from "../../assets/header/7.png";
import img8 from "../../assets/header/8.png";
export const ContactInforTab = () => {
    // const [selectedTab, setSelectedTab] = useState("all");
    const [selectedTab, setSelectedTab] = useState("owner");
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <Typography.Title level={3}>Contact Info</Typography.Title>
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
        <Form.Item name="contactPreference" label="" initialValue="owner">
          
        </Form.Item>

        

        <Typography.Title level={5} style={{ textAlign: 'left', marginTop: '20px' }}>
          Owner Details - 01
        </Typography.Title>
        <Form.Item
          label="Name Property Owner"
          name="owner1Name"
          rules={[{ required: true, message: 'Please input the name of the property owner!' }]}
        >
          <Input placeholder="Input here" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="owner1Email"
          rules={[{ type: 'email', message: 'Please enter a valid email address!' }]}
        >
          <Input placeholder="Input here" />
        </Form.Item>
        <Form.Item
          label="Mobile Phone"
          name="owner1Phone"
          rules={[{ required: true, message: 'Please input the mobile phone number!' }]}
        >
          <Input placeholder="Input here" />
        </Form.Item>

        <Typography.Title level={5} style={{ textAlign: 'left', marginTop: '20px' }}>
          Owner Details - 02
        </Typography.Title>
        <Form.Item
          label="Name Property Owner"
          name="owner2Name"
        >
          <Input placeholder="Input here" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="owner2Email"
          rules={[{ type: 'email', message: 'Please enter a valid email address!' }]}
        >
          <Input placeholder="Input here" />
        </Form.Item>
        <Form.Item
          label="Mobile Phone"
          name="owner2Phone"
        >
          <Input placeholder="Input here" />
        </Form.Item>

        <Typography.Title level={5} style={{ textAlign: 'left', marginTop: '20px' }}>
          Linked real estate agent
        </Typography.Title>
        <Form.Item name="linkedAgents">
          <Checkbox.Group style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[30px]" src={img1} alt="" />
            <span className="font-semibold">Summit Realty Group</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[30px]" src={img2} alt="" />
            <span className="font-semibold">Golden Key Properties</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[30px]" src={img3} alt="" />
            <span className="font-semibold">Pinnacle Estates Co.</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[30px]" src={img4} alt="" />
            <span className="font-semibold">Urban Oasis Realty</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[30px]" src={img5} alt="" />
            <span className="font-semibold">Horizon Land Ventures</span>
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
            <span className="font-semibold">Evergreen Property Partners</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[30px]" src={img8} alt="" />
            <span className="font-semibold">Cornerstone Realty Solutions</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[30px]" src={img8} alt="" />
            <span className="font-semibold">Cornerstone Realty Solutions</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[30px]" src={img8} alt="" />
            <span className="font-semibold">Cornerstone Realty Solutions</span>
          </div>
        </Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>
      </Form>
                </div>
              )}
              {selectedTab === "agent" && (
                <div>
                  <Form>
                  <Typography.Title level={5} style={{ textAlign: 'left', marginTop: '20px' }}>
          Linked real estate agent
        </Typography.Title>
        <Form.Item name="linkedAgents">
          <Checkbox.Group style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Checkbox>
                        {" "}
                        <div className="flex items-center gap-5">
                          <img className="w-[30px]" src={img1} alt="" />
                          <span className="font-semibold">Summit Realty Group</span>
                        </div>
                      </Checkbox>
                      <Checkbox>
                        {" "}
                        <div className="flex items-center gap-5">
                          <img className="w-[30px]" src={img2} alt="" />
                          <span className="font-semibold">Golden Key Properties</span>
                        </div>
                      </Checkbox>
                      <Checkbox>
                        {" "}
                        <div className="flex items-center gap-5">
                          <img className="w-[30px]" src={img3} alt="" />
                          <span className="font-semibold">Pinnacle Estates Co.</span>
                        </div>
                      </Checkbox>
                      <Checkbox>
                        {" "}
                        <div className="flex items-center gap-5">
                          <img className="w-[30px]" src={img4} alt="" />
                          <span className="font-semibold">Urban Oasis Realty</span>
                        </div>
                      </Checkbox>
                      <Checkbox>
                        {" "}
                        <div className="flex items-center gap-5">
                          <img className="w-[30px]" src={img5} alt="" />
                          <span className="font-semibold">Horizon Land Ventures</span>
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
                          <span className="font-semibold">Evergreen Property Partners</span>
                        </div>
                      </Checkbox>
                      <Checkbox>
                        {" "}
                        <div className="flex items-center gap-5">
                          <img className="w-[30px]" src={img8} alt="" />
                          <span className="font-semibold">Cornerstone Realty Solutions</span>
                        </div>
                      </Checkbox>
                      <Checkbox>
                        {" "}
                        <div className="flex items-center gap-5">
                          <img className="w-[30px]" src={img8} alt="" />
                          <span className="font-semibold">Cornerstone Realty Solutions</span>
                        </div>
                      </Checkbox>
                      <Checkbox>
                        {" "}
                        <div className="flex items-center gap-5">
                          <img className="w-[30px]" src={img8} alt="" />
                          <span className="font-semibold">Cornerstone Realty Solutions</span>
                        </div>
                      </Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>
                    </Form>
                </div>
              )}

      
    </div>
  );
};
