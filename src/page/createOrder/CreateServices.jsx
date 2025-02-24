import React, { useState } from "react";
import { ServicesTab } from "./ServicesTab";
import { AdressTab } from "./AdressTab";
import { ContactInforTab } from "./ContactInforTab";
import { ConfirmSection } from "./ConfirmDection";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const CreateServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    serviceIds: [],
    services: [],
  });

  const tabs = ["Services", "Address", "Contact Info", "Confirm"];
  const tabContent = [
    <ServicesTab formData={formData} setFormData={setFormData} />,
    <AdressTab />,
    <ContactInforTab />,
    <ConfirmSection />,
  ];

  const handleNext = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
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
          <button
            className="border border-[#2A216D] text-[#2A216D] flex items-center"
            onClick={handleNext}
            disabled={activeTab === tabs.length - 1}
            style={{
              padding: "7px 40px",
              backgroundColor: activeTab === tabs.length - 1 ? "" : "",
              color: "",
              border: "",
              cursor: activeTab === tabs.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            Next <FaArrowRightLong className="text-lg ml-2 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateServices;
