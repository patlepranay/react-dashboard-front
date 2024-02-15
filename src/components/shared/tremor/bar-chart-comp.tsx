import { useDataStore } from "@/lib/state";
import { BarChart } from "@tremor/react";


const BarChartComp = () => {
  const { data } = useDataStore();

  return (
    <BarChart
      data={data}
      index="name"
      categories={["revenue"]}
      colors={["blue", "pink"]}
      //   valueFormatter={dataFormatter}
      yAxisWidth={65}
    />
  );
};

export default BarChartComp;
