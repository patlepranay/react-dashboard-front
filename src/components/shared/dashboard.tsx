import { ResponsiveContainer } from "recharts";
import BarChartComp from "./bar-chart";
import LineChartComp from "./linechart";
import PieChartComp from "./pie-chart";
import ComposedChartComp from "./composed-chart";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-6 p-4">
      <div className="flex items-center h-[500px] w-full">
        <BarChartComp />
        <LineChartComp />
        <div className="flex flex-col items-center h-full w-full">
          {/* <DomainRadarChart data={data} /> */}
          <PieChartComp />
          <PieChartComp />
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ComposedChartComp />
      </div>
    </div>
  );
};

export default Dashboard;
