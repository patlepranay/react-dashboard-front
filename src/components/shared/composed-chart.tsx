import { useDataStore } from "@/lib/state";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ComposedChartComp = () => {
  const data = useDataStore((state) => state.data);


  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="data.revenue" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="data.profitLoss" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="data.expenses" stroke="#ff7300" />
        {/* <Line type="monotone" dataKey="data.profitLoss" stroke="#ff7300" /> */}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedChartComp;
