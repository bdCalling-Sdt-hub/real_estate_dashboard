import { Input } from "antd";
import { useState } from "react";

import { ServicesPackeg } from "./ServicesPackeg";
import { useGetAllPackageQuery } from "../redux/api/packageApi";
import {
  useGetAllServicesCategoriesQuery,
  useGetAllServicesQuery,
} from "../redux/api/serviceApi";

export const ServicesTab = ({ formData, setFormData }) => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: servicesCategories } = useGetAllServicesCategoriesQuery();
  const { data: packages } = useGetAllPackageQuery({
    searchTerm,
  });
  const { data: services } = useGetAllServicesQuery({
    category: selectedTab,
    searchTerm,
    limit: 100,
  });
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div
            onClick={() => setSelectedTab(null)}
            className={`px-11 py-1  cursor-pointer ${
              selectedTab === null
                ? "bg-[#2A216D] text-[white] rounded-full "
                : "border border-[#2A216D] text-[#2A216D] rounded-full "
            }`}
          >
            Packages
          </div>
          {servicesCategories?.data?.map((category) => (
            <div
              key={category._id}
              onClick={() => setSelectedTab(category._id)}
              className={`px-11 py-1  cursor-pointer ${
                selectedTab === category._id
                  ? "bg-[#2A216D] text-[white] rounded-full"
                  : "border border-[#2A216D] text-[#2A216D] rounded-full "
              }`}
            >
              {category.name}
            </div>
          ))}
        </div>

        <Input
          placeholder="Search here..."
          style={{ width: 300 }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        {selectedTab === null ? (
          <ServicesPackeg
            packages={packages?.data}
            selectedTab={selectedTab}
            searchTerm={searchTerm}
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <ServicesPackeg
            services={services?.data}
            selectedTab={selectedTab}
            searchTerm={searchTerm}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
};
