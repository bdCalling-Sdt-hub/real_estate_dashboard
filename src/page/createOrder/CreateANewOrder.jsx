import { Checkbox } from "antd";
import React from "react";
import img1 from "../../assets/header/1.png";
import img2 from "../../assets/header/2.png";
import img3 from "../../assets/header/3.png";
import img4 from "../../assets/header/4.png";
import img5 from "../../assets/header/5.png";
import img6 from "../../assets/header/6.png";
import img7 from "../../assets/header/7.png";
import img8 from "../../assets/header/8.png";
import { Link } from "react-router-dom";
export const CreateANewOrder = () => {
  return (
    <div className="">
        <div className="grid grid-cols-2">
      <div className="flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-[#2A216D] mb-2">Create A New Order</h1>
        <p>Select a client/company</p>
      </div>
      </div>
      <div className="flex flex-col bg-white p-11 gap-5 rounded">
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img1} alt="" />
            <span className="font-semibold">Summit Realty Group</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img2} alt="" />
            <span className="font-semibold">Golden Key Properties</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img3} alt="" />
            <span className="font-semibold">Pinnacle Estates Co.</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img4} alt="" />
            <span className="font-semibold">Urban Oasis Realty</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img5} alt="" />
            <span className="font-semibold">Horizon Land Ventures</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img6} alt="" />
            <span className="font-semibold">True North Homes</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img7} alt="" />
            <span className="font-semibold">Evergreen Property Partners</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img8} alt="" />
            <span className="font-semibold">Cornerstone Realty Solutions</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img8} alt="" />
            <span className="font-semibold">Cornerstone Realty Solutions</span>
          </div>
        </Checkbox>
        <Checkbox>
          {" "}
          <div className="flex items-center gap-5">
            <img className="w-[40px]" src={img8} alt="" />
            <span className="font-semibold">Cornerstone Realty Solutions</span>
          </div>
        </Checkbox>
        <Link className="bg-[#2A216D] text-white text-center py-2 rounded" to={'/dashboard/create-services'}><button >Continue</button></Link>
      </div>
    </div>
    </div>
  );
};
