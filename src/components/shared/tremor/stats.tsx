import { useDataStore } from "@/lib/state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, DollarSign,  User } from "lucide-react";

const Stats = () => {
  const { data } = useDataStore();

  const highestProfitMaker = data.reduce((maxEntry, currentEntry) => {
    return currentEntry.profit > maxEntry.profit ? currentEntry : maxEntry;
  }, data[0]);

  const totalProfit = data.reduce((sum, entry) => sum + entry.profit, 0);
  const totalRevenue = data.reduce((sum, entry) => sum + entry.revenue, 0);
  const averageProfit = totalProfit / data.length;
  // console.log(data);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mb-4 ">
        <Card className="">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-muted-foreground">
              Companies Registered
            </CardTitle>
            <Building />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {Math.floor(Math.random() * (100 - 10) + 10)}
            </div>
            <p className="text-xs text-muted-foreground"></p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-muted-foreground">
              Largest Profit Maker
            </CardTitle>
            <User />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highestProfitMaker?.name}</div>
            <p className="text-sm text-muted-foreground">{`$ ${highestProfitMaker?.profit}`}</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mb-4 ">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-muted-foreground">
              Average Profit
            </CardTitle>
            <DollarSign />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{`$ ${averageProfit}`}</div>
            <p className="text-sm text-muted-foreground">highest in industry</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-muted-foreground">
              Total Revenue Generated
            </CardTitle>
            <DollarSign />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{`$ ${totalRevenue}`}</div>
            <p className="text-sm text-muted-foreground">till now</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Stats;
