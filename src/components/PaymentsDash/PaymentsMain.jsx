import Navbar from "../Common/Navbar";
import Card from "../Common/Card";
import Transaction from "./Transaction";

const PaymentsMain = () => {
  return (
    <div className="grow">
      <Navbar />
      {/* drop */}
      <div className=" p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-text-dark text-xl font-medium">Overview</h1>
          <select className="p-2 px-4 bg-white border-2 rounded-md text-text font-medium">
            <option selected>Last Month</option>
            <option value="30">30 days</option>
            <option value="60">60 days</option>
            <option value="90">90 days</option>
          </select>
        </div>
        {/* Cards */}
        <div className="mt-7 flex justify-between gap-6 ">
          <Card title="Online Orders" amount="231" />
          <Card title="Amount Processed" amount="₹23,92,312.19" />
        </div>
        {/* transactions component */}
        <Transaction />
      </div>
    </div>
  );
};

export default PaymentsMain;
