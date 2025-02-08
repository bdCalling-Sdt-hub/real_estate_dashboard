import { Button, Dropdown, Input, Menu } from "antd";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { PurchasedPackageSection } from "./PurchasedPackageSection";
import { MassageBox } from "./MassageBox";
import { DetailsNote } from "./DetailsNote";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import { EditShedualModal } from "./EditShedualModal";

export const OrderDetailsPage = () => {
  // const [modal2Open, setModal2Open] = useState(false);
  const menu = (
    <Menu>
  
        <Menu.Item key="1"><Link to={"/dashboard/order-management/order-details/edit-order"}>Edit Order</Link></Menu.Item>
  
      <Menu.Item key="2"><Link to={'/dashboard/order-management/order-details/edit-services'} >Edit Services</Link></Menu.Item>
      <Menu.Item  key="3">Cancel Order</Menu.Item>
      
    </Menu>
  );
  return (
    <div className="p-6 bg-white min-h-screen">
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
          <span className="text-lg font-semibold">Order Details</span>
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
      <div className=" max-w-7xl m-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <div className="  mb-6 border p-4 rounded-md">
              
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-right">
                  Total Price
                </h2>
                <p className=" font-bold text-lg">$450</p>
              </div>
            </div>

            <div className="border flex justify-between p-4 rounded-md items-center">
              <p className="font-semibold">Appointment</p>
              <button className="  rounded-md ">
                12/04/25 at 4:00 pm
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-600">
                Please call the property owner to make an appointment, take some
                pictures and videos of the property location.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Property Information</h3>
              <ul className="text-gray-600 mt-2 space-y-2">
                <li>
                  <strong>Zip Code:</strong> 3535
                </li>
                <li>
                  <strong>Street Number:</strong> 12/4
                </li>
                <li>
                  <strong>Street Address:</strong> 1901 Thornridge Cir. Shiloh,
                  Hawaii 81063
                </li>
                <li>
                  <strong>City:</strong> Hawaii
                </li>
                <li>
                  <strong>State:</strong> California
                </li>
                <li>
                  <strong>Pickup keys at real estate office?</strong> Yes
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Order Placed By:</h3>
              <p className="text-gray-600">Robert Smith</p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="h-56 w-full rounded-md overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509851!2d-122.41941548468156!3d37.77492977975852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b0a12b3d%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzE5LjciVw!5e0!3m2!1sen!2sus!4v1639820485865!5m2!1sen!2sus"
                title="map"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Property Owner</h3>
              <div className="mt-2">
                <p>
                  <strong>Owner Details-1:</strong>
                </p>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>
                    <strong>Name:</strong> Robert Smith
                  </li>
                  <li>
                    <strong>Email:</strong> smith24@gmail.com
                  </li>
                  <li>
                    <strong>Phone Number:</strong> +456636646004
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <p>
                  <strong>Owner Details-2:</strong>
                </p>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>
                    <strong>Name:</strong> Robert Smith
                  </li>
                  <li>
                    <strong>Email:</strong> smith24@gmail.com
                  </li>
                  <li>
                    <strong>Phone Number:</strong> +456636646004
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <p>
                  <strong>Real Estate Agent:</strong> Ronald Richards
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <DetailsNote></DetailsNote> */}

        <PurchasedPackageSection></PurchasedPackageSection>
        <MassageBox></MassageBox>
      </div>
      {/* <EditShedualModal setModal2Open={setModal2Open}
        modal2Open={modal2Open}></EditShedualModal> */}
    </div>
  );
};
