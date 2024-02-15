import { Card } from "@tremor/react";
import AreaChartComp from "./tremor/areachart";
import TableComp from "./tremor/table";
import { useDataStore } from "@/lib/state";
import BarChartComp from "./tremor/bar-chart-comp";
import Stats from "./tremor/stats";

const TremorDashboard = () => {
  const { data } = useDataStore();

  return (
    <>
      <div className="flex-col  space-y-4">
        <div className=" flex flex-col sm:flex-row  gap-4    ">
          <Card className="rounded-md">
            <AreaChartComp />
          </Card>
          <Card className="  rounded-md w-full md:w-fit">
            <TableComp
              data={data}
              caption="Company Profit(in Cr) of last 10 years"
              header={["Year", "Total Revenue", "Profit", "Employee Count"]}
            />
          </Card>
        </div>

        <div className=" flex flex-col sm:flex-row  gap-4 w-full">
          <Card className="rounded-md ">
            <Stats />
          </Card>
          <Card className="rounded-md">
            <BarChartComp />
          </Card>
        </div>
      </div>
    </>
  );
};

export default TremorDashboard;
