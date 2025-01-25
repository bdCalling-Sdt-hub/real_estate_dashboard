import { RecentOrder } from "./RecentOrder";
import { UpcomingAppoinment } from "./UpcomingAppoinment";
import profile from '../../assets/header/profileLogo.png'
import add from "../../assets/header/add.png";
const Dashboard = () => {
  return (
    <div className="p-2 min-h-screen">
      <div className="lg:grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <div className="bg-white p-6 rounded flex items-center gap-4">
            <img className="w-16 rounded-full" src={profile} alt="" />
            <h1 className="text-4xl font-semibold">Good Morning, Robert!</h1>
          </div>
          <div className="bg-white mt-4">
          <UpcomingAppoinment></UpcomingAppoinment>
          </div>
        </div>
        <div className="col-span-2">
          <img src={add} alt="" />
        </div>
      </div>
      <div className="bg-white mt-5">
        <RecentOrder></RecentOrder>
      </div>
    </div>
  );
};

export default Dashboard;
