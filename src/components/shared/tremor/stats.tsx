import { useDataStore } from "@/lib/state";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

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
    <div className="flex flex-col space-y-4 ">
      <div className="flex flex-col sm:flex-row   gap-4">
        <Card className="min-w-[280px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-muted-foreground">
              Companies Registered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{Math.floor(Math.random() * (100 - 10) + 10)}</div>
            <p className="text-xs text-muted-foreground"></p>
          </CardContent>
        </Card>

         <Card className="min-w-[280px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-muted-foreground">
              Largest Profit Maker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highestProfitMaker?.name}</div>
            <p className="text-sm text-muted-foreground">{`$ ${highestProfitMaker?.profit}`}</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col sm:flex-row   gap-4">
           <Card className="min-w-[280px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-muted-foreground">
              Average Profit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{`$ ${averageProfit}`}</div>
            <p className="text-sm text-muted-foreground">highest in industry</p>
          </CardContent>
        </Card>

          <Card className="min-w-[280px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-muted-foreground">
            Total Revenue Generated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{`$ ${totalRevenue}`}</div>
            <p className="text-sm text-muted-foreground">till now</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Stats;
