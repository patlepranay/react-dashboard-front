import { useDataStore } from "@/lib/state";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const PieChartComp = () => {
  const data = useDataStore((state) => state.data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="data.expenses"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data}
          dataKey="data.revenue"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComp;
