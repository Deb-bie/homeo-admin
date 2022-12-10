import Sidebar from "../../components/sidebar/";
import Navbar from "../../components/navbar/";
import Widget from "../../components/widget/";
import Featured from "../../components/featured/";
import Chart from "../../components/chart/";
import Table from "../../components/table/";

const Dashboard = () => {
  return (
    <div className="w-[100%] min-h-[100%] flex flex-row ">
      <Sidebar />
      <div className="w-[100%] h-[100%] overflow-hidden ">
        <Navbar />
        <div className="w-[100%] px-4 gap-4 grid 4xs:grid-cols-1 2xs:grid-cols-2 lg:grid-cols-4 ">
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="w-[100%] my-4 px-4 gap-4 grid 4xs:grid-cols-1 lg:grid-cols-2">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="w-[100%] my-12 px-6 ">
          <div className="">Latest Transactions</div>
          <div className="overflow-x-auto " >
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
