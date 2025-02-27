import React, { useState } from "react";
import { ServicesTab } from "./ServicesTab";
import { AdressTab } from "./AdressTab";
import { ContactInforTab } from "./ContactInforTab";
import { ConfirmSection } from "./ConfirmDection";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useCreateOrderMutation } from "../redux/api/ordersApi";
import { message, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    serviceIds: [],
    services: [],
    contactAgent: "false",
  });
  const navigate = useNavigate();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const tabs = ["Services", "Address", "Contact Info", "Confirm"];
  const tabContent = [
    <ServicesTab formData={formData} setFormData={setFormData} />,
    <AdressTab formData={formData} setFormData={setFormData} />,
    <ContactInforTab formData={formData} setFormData={setFormData} />,
    <ConfirmSection formData={formData} setFormData={setFormData} />,
  ];

  const handleNext = () => {
    // Step 1: Services Tab Validation
    if (activeTab === 0) {
      if (formData.serviceIds.length > 0) {
        setActiveTab(1);
      } else {
        message.error("Please select a service");
        return; // Stop further processing
      }
    }

    // Step 2: Address Tab Validation    
    if (activeTab === 1) {
      const { zipCode, city, streetAddress, streetName, streetNumber } =
        formData.address || {};

      if (!zipCode || !city || !streetAddress || !streetName || !streetNumber) {
        message.error("Please enter a complete address");
        return;
      }

      if (!formData?.pickupKeys) {
        message.error("Please enter pickup keys");
        return;
      }

      setActiveTab(2);
    }

    // Step 3: Contact Info Tab Validation
    if (activeTab === 2) {
      console.log({ formData });
      const contactAgent =
        formData?.contactAgent === "true" && formData?.linkedAgents?._id;
      const contactOwner =
        formData?.contactAgent === "false" &&
        formData?.contactInfo &&
        formData.contactInfo.name1 &&
        formData.contactInfo.email1 &&
        formData.contactInfo.phone1;
      if (contactAgent || contactOwner) {
        setActiveTab(3);
      } else {
        message.error("Please enter contact information");
        return; // Stop further processing
      }
    }

    // Step 4: Confirm Tab (Final Step Validation)
    if (activeTab === 3) {
      if (formData.services?.length > 0) {
        handleCreateOrder();
      } else {
        message.error("Please review your service information");
        return; // Stop further processing
      }
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const clientId = useSelector((state) => state.logInUser.clientId);

  const handleCreateOrder = async () => {
    const formDataForAPI = new FormData();
    const serviceIds = formData.services
      .filter((service) => !service.package_image)
      .map((service) => service._id);
    const packageIds = formData.services
      .filter((service) => service.package_image)
      .map((service) => service._id);

    const data = {
      clientId,
      pickupKeyOffice: formData.pickupKeys === "yes" ? true : false,
      contactAgent: formData.contactAgent,
      contactOwner: formData.contactAgent === "false" ? true : false,
      address: formData.address,
      contactInfo: formData.contactInfo,
      linkedAgents:
        formData.contactAgent === "true" ? [formData.linkedAgents._id] : [],
      locations: {
        lat: formData.address.lat,
        lng: formData.address.lng,
      },
      descriptions: formData.description,
      totalAmount: formData.services.reduce((acc, curr) => acc + curr.price, 0),
      serviceIds: serviceIds,
      packageIds: packageIds,
    };
    formData.uploadFiles.forEach((file) => {
      formDataForAPI.append("uploadFiles", file.originFileObj);
    });
    formDataForAPI.append("data", JSON.stringify(data));

    try {
      await createOrder(formDataForAPI);
      message.success("Order created successfully");
      // Reset form data
      setFormData({
        serviceIds: [],
        services: [],
        contactAgent: "false",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    <div className="bg-white p-4 ">
      <div className="flex justify-center">
        <div
          style={{ display: "flex", justifyContent: "", marginBottom: "20px" }}
        >
          {tabs.map((tab, index) => (
            <div className="flex" key={index}>
              <div
                style={{
                  padding: "6px 20px",
                  border:
                    activeTab === index
                      ? "1px solid #9B3C7B"
                      : "1px dashed #9B3C7B",
                  backgroundColor: activeTab === index ? "#F5ECF2" : "",
                  color: "#9B3C7B",
                  borderRadius: "50px",
                  cursor: "default",
                }}
              >
                {index + 1}. {tab}
              </div>
              {index < tabs.length - 1 && (
                <span className="text-[#9B3C7B] mt-1">...............</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ minHeight: "100px", marginBottom: "20px" }}>
        <h2>{tabContent[activeTab]}</h2>
      </div>

      <div className="flex justify-center mt-11">
        <div style={{ display: "flex", justifyContent: "", gap: "20px" }}>
          <button
            className="border border-[#2A216D] text-[#2A216D] flex items-center"
            onClick={handlePrevious}
            disabled={activeTab === 0}
            style={{
              padding: "7px 40px",
              backgroundColor: activeTab === 0 ? "" : "",
              color: "",
              border: "",
              cursor: activeTab === 0 ? "not-allowed" : "pointer",
            }}
          >
            <FaArrowLeftLong className="text-lg mr-2 mt-1" />
            Previous
          </button>
          {isLoading ? (
            <button className="border border-[#2A216D] text-[#2A216D] flex items-center">
              <Spin className="px-6" />
            </button>
          ) : (
            <button
              className="border border-[#2A216D] text-[#2A216D] flex items-center"
              onClick={handleNext}
              disabled={activeTab === tabs.length}
              style={{
                padding: "7px 40px",
                backgroundColor: activeTab === tabs.length ? "" : "",
                color: "",
                border: "",
                cursor: activeTab === tabs.length ? "not-allowed" : "pointer",
              }}
            >
              Next <FaArrowRightLong className="text-lg ml-2 mt-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateServices;
