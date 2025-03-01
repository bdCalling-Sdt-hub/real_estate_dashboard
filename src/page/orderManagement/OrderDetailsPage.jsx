import { Button, Dropdown, Menu, Spin } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { PurchasedPackageSection } from "./PurchasedPackageSection";
import { MassageBox } from "./MassageBox";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../redux/api/ordersApi";
import dayjs from "dayjs";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { menu } from "./constant";
import { useGetProfileQuery } from "../redux/api/userApi";

export const OrderDetailsPage = () => {
  const{data:getProfile}=useGetProfileQuery(); 
  // console.log('============',getProfile?.data?.can_see_pricing)
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: order, isLoading } = useGetOrderByIdQuery(id);
  if (isLoading) {
    return (
      <div className="p-6 bg-white min-h-screen flex justify-center items-center">
        <Spin />
      </div>
    );
  }

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
        <Dropdown overlay={() => menu(id)} trigger={["click"]}>
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
  <div className="mb-6 border p-4 rounded-md">
    <div className="flex justify-between">
      <h2 className="text-xl font-semibold text-right">Total Price</h2>
      <p className="font-bold text-lg">
        {getProfile?.data?.can_see_pricing && (
          Number(order?.data?.totalAmount).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        )}
      </p>
    </div>
  </div> 


            <div className="border flex justify-between p-4 rounded-md items-center">
              <p className="font-semibold">Appointment</p>
              <button className="rounded-md">
                {order?.data?.schedule?.start_time
                  ? dayjs(order?.data?.schedule?.start_time).format(
                      "DD/MM/YYYY [at] hh:mmA"
                    )
                  : "No appointment scheduled"}
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-600">{order?.data?.descriptions}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Property Information</h3>
              <ul className="text-gray-600 mt-2 space-y-2">
                <li>
                  <strong>Zip Code:</strong>{" "}
                  {order?.data?.address?.zipCode || "N/A"}
                </li>
                <li>
                  <strong>Street Number:</strong>{" "}
                  {order?.data?.address?.streetNumber || "N/A"}
                </li>
                <li>
                  <strong>Street Address:</strong>{" "}
                  {order?.data?.address?.streetAddress || "N/A"}
                </li>
                <li>
                  <strong>City:</strong> {order?.data?.address?.city || "N/A"}
                </li>
                <li>
                  <strong>State:</strong> {order?.data?.address?.state || "N/A"}
                </li>
                <li>
                  <strong>Pickup keys at real estate office?</strong>{" "}
                  {order?.data?.address?.pickupKeyOffice ? "Yes" : "No"}
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Order Placed By:</h3>
              <p className="text-gray-600">
                {order?.data?.orderPlaced?.userId?.name}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="h-56 w-full rounded-md overflow-hidden shadow-md">
              <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <Map
                  style={{ width: "100%", height: "100%" }}
                  defaultCenter={{
                    lng: order?.data?.locations.coordinates[0],
                    lat: order?.data?.locations.coordinates[1],
                  }}
                  defaultZoom={13}
                  gestureHandling={"greedy"}
                >
                  <Marker
                    position={{
                      lng: order?.data?.locations.coordinates[0],
                      lat: order?.data?.locations.coordinates[1],
                    }}
                  />
                </Map>
              </APIProvider>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Property Owner</h3>
              <div className="mt-2">
                <p>
                  <strong>Owner Details-1:</strong>
                </p>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>
                    <strong>Name:</strong>{" "}
                    {order?.data?.contactInfo?.name1 || "N/A"}
                  </li>
                  <li>
                    <strong>Email:</strong>
                    {order?.data?.contactInfo?.email1 || "N/A"}
                  </li>
                  <li>
                    <strong>Phone Number:</strong>
                    {order?.data?.contactInfo?.phone1 || "N/A"}
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <p>
                  <strong>Owner Details-2:</strong>
                </p>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>
                    <strong>Name:</strong>
                    {order?.data?.contactInfo?.name2 || "N/A"}
                  </li>
                  <li>
                    <strong>Email:</strong>
                    {order?.data?.contactInfo?.email2 || "N/A"}
                  </li>
                  <li>
                    <strong>Phone Number:</strong>
                    {order?.data?.contactInfo?.phone2 || "N/A"}
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <p>
                  <strong>Real Estate Agent:</strong>{" "}
                  {order?.data?.linkedAgents
                    ?.map((agent) => agent.name)
                    .join(", ") || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <PurchasedPackageSection tasks={order?.data?.taskIds} />
        <MassageBox files={order?.data?.uploadFiles} />
      </div>
    </div>
  );
};
