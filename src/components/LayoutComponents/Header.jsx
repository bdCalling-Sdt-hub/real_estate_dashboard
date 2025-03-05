import { LuBell } from "react-icons/lu";
import profilee from "../../../src/assets/header/profileLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaJediOrder } from "react-icons/fa";

import { useRef, useState } from "react";
import { Drawer, Radio, Space } from "antd";

import dashboard from "../../assets/routerImg/dashboard.png";
import categorie from "../../assets/routerImg/categorie.png";
import create from "../../assets/routerImg/create.png";
import settings from "../../assets/routerImg/settings.png";
import subscription from "../../assets/routerImg/subscription.png";
import user from "../../assets/routerImg/user.png";
import logo from "../../assets/header/logo1.png";

import { FaChevronRight } from "react-icons/fa";

import { IoIosLogIn } from "react-icons/io";
import { useGetProfileQuery } from "../../page/redux/api/userApi";
import { useSelector } from "react-redux";
import {
  useGetNotificationQuery,
  useUpdateSeenNotificationMutation,
} from "../../page/redux/api/agentApi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { PiClockUserLight, PiInvoice } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

const items = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <MdOutlineDashboard />,
    link: "/",
  },
  {
    key: "messageMail",
    label: "Message/Mail",
    icon: <AiOutlineMail />,
    link: "/dashboard/message-mail",
  },
  {
    key: "orderManagement",
    label: "Order Management",
    icon: <FaJediOrder />,
    link: "/dashboard/order-management",
  },
  {
    key: "InvoiceOrder",
    label: "Invoice Order",
    icon: <PiInvoice />,
    link: "/dashboard/invoice-order",
  },
  {
    key: "agent",
    label: "Agent",
    icon: <PiClockUserLight />,
    link: "/dashboard/agent",
  },
  {
    key: "Settings",
    label: "Settings",
    icon: <IoSettingsOutline />,
    link: "/dashboard/settings",
  },
];

const Header = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const navigate = useNavigate();
  const id = useSelector((state) => state.logInUser.clientId);
  const { data: notificationData } = useGetNotificationQuery({ id });
  const [updateSeenNotif] = useUpdateSeenNotificationMutation();
  const { data: getProfile } = useGetProfileQuery();
  console.log(getProfile?.data?.place_an_order);

  const contentRef = useRef({});

  const onParentClick = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const onClick = (key) => {
    setSelectedKey(key);
  };

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const { data } = useGetProfileQuery();
  const unSeenNotification = notificationData?.data?.filter(
    (data) => !data.status
  );

  const handleOnclick = () => {
    if (unSeenNotification?.length) {
      // Update the notifications status to seen (true) when clicked
      updateSeenNotif();
    }
  };
  return (
    <div className="bg-[#FEFEFE] text-white pt-[24px]">
      <div className="flex justify-between">
        <div className="lg:hidden ">
          <div className="py-3 pl-4">
            <div onClick={showDrawer} className="text-3xl text-gray-700">
              <FaBars />
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex gap-8 p-1 px-6">
          <div className="relative">
            <Link to={"/dashboard/Settings/notification"}>
              <div
                onClick={handleOnclick}
                className="w-[45px] h-[45px] flex items-center justify-center text-xl rounded-full bg-neutral-100 text-[#2A216D] "
              >
                <span>
                  <LuBell />
                </span>
              </div>
            </Link>

            <Space>
              <Radio.Group value={placement} onChange={onChange}></Radio.Group>
            </Space>
            <Drawer
              placement={placement}
              closable={false}
              onClose={onClose}
              open={open}
              key={placement}
            >
              <div className="bg-[#FEFEFE]   -m-6">
                <div className="custom-sidebar-logo flex justify-center mt-5 mb-8">
                  <img src={logo} alt="Logo" className="w-[160px]" />
                </div>

                {getProfile?.data && getProfile?.data?.place_an_order && (
                  <div className="mx-5 mb-6">
                    <Link to={"/dashboard/create-services"}>
                      <button className="bg-[#2A216D] text-white py-2 w-full rounded">
                        + Create Order
                      </button>
                    </Link>
                  </div>
                )}

                <div className="menu-items">
                  {items.map((item) => (
                    <div key={item.key}>
                      <Link
                        to={item.link}
                        className={`menu-item my-1 mr-5 py-3 px-3 pl-9 flex items-center cursor-pointer ${
                          selectedKey === item.key
                            ? "bg-[#EAE9F0] rounded-r-md"
                            : "rounded-r-md  hover:bg-gray-200"
                        }`}
                        onClick={(e) => {
                          if (item.children) {
                            e.preventDefault();
                            onParentClick(item.key);
                          } else {
                            setSelectedKey(item.key);
                          }
                        }}
                      >
                        <span className="w-4 h-4 mr-3">{item.icon} </span>
                        <span className="block w-full text-black">
                          {item.label}
                        </span>

                        {item.children && (
                          <FaChevronRight
                            className={`ml-auto transform transition-all duration-300 ${
                              expandedKeys.includes(item.key) ? "rotate-90" : ""
                            }`}
                          />
                        )}
                      </Link>

                      {item.children && (
                        <div
                          className={`children-menu bg-white -my-2 mx-5  text-black transition-all duration-300 ${
                            expandedKeys.includes(item.key) ? "expanded" : ""
                          }`}
                          style={{
                            maxHeight: expandedKeys.includes(item.key)
                              ? `${
                                  contentRef.current[item.key]?.scrollHeight
                                }px`
                              : "0",
                          }}
                          ref={(el) => (contentRef.current[item.key] = el)}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.key}
                              to={child.link}
                              className={`menu-item p-4 flex items-center cursor-pointer ${
                                selectedKey === child.key
                                  ? "bg-[#EDC4C5]"
                                  : "hover:bg-gray-200"
                              }`}
                              onClick={() => {
                                setSelectedKey(child.key);
                                setExpandedKeys([]);
                              }}
                            >
                              <span className="block w-full text-black">
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="custom-sidebar-footer absolute bottom-0 w-full p-4 ">
                  <button
                    onClick={handleLogout}
                    className="w-full flex bg-white text-start rounded-md text-black p-3"
                  >
                    <span className="text-2xl">
                      <IoIosLogIn />
                    </span>
                    <span className="ml-3">Log Out</span>
                  </button>
                </div>
              </div>
            </Drawer>

            <span className="absolute top-0 right-0 -mr-2  w-5 h-5 bg-[#2A216D] text-white text-xs flex items-center justify-center rounded-full">
              {unSeenNotification?.length || "0"}
            </span>
          </div>

          <Link to={"/dashboard/settings"}>
            <div className="flex gap-3">
              <div>
                <img
                  className="w-[45px] h-[45px] rounded-full object-cover"
                  src={
                    data?.data?.profile_image
                      ? `${import.meta.env.VITE_BASE_URL}/${
                          data?.data?.profile_image
                        }`
                      : `https://ui-avatars.com/api/?name=${data?.data?.name}`
                  }
                  alt="profile"
                />
              </div>
              <div className="text-end text-black">
                <h3 className="text-xl">{data?.data?.name || "Loading..."}</h3>
                <h4 className="text-sm">{data?.data?.role || "Loading..."}</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
