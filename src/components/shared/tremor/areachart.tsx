import { useDataStore } from "@/lib/state";
import { AreaChart } from "@tremor/react";

const AreaChartComp = () => {
  const { data } = useDataStore();

  const rotateX = {
    angle: -90,
  };
  return (
    <>
      <AreaChart
        data={data}
        index="name"
        categories={["revenue", "expenses"]}
        colors={["blue", "pink"]}
        showLegend={true}
        showGradient={true}
        showYAxis={true}
        showXAxis={true}
        showAnimation={true}
        curveType={"monotone"}
        yAxisWidth={65}
        intervalType={"preserveStartEnd"}
      />
      {/* <h2 className="text-center font-semibold my-5">
        Company Expense and Revenue Area Chart
      </h2> */}
    </>
  );
};

export default AreaChartComp;
