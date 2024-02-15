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
      <div className="flex-col w-screen space-y-4">
        <div className=" flex flex-col sm:flex-row  gap-4   w-full ">
          <Card className="rounded-md">
            <AreaChartComp />
          </Card>
          <Card className=" sm:w-full md:w-fit rounded-md">
            <TableComp
              data={data}
              caption="Company Profit(in Cr) of last 10 years"
              header={["Year", "Total Revenue", "Profit", "Employee Count"]}
            />
          </Card>
        </div>

        <div className=" flex flex-col sm:flex-row  gap-4  justify-start
          ">
          <Card className="rounded-md  sm:w-full md:w-fit">
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
