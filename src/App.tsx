import { ThemeProvider } from "@/components/theme-provider";

import Header from "./components/shared/header";

import { useDataStore } from "./lib/state";
import { useEffect, useState } from "react";
import TremorDashboard from "./components/shared/tremor-dashboard";
import { Skeleton } from "./components/ui/skeleton";
import { Card } from "./components/ui/card";
import { useToast } from "./components/ui/use-toast";

const App = () => {
  const { toast } = useToast();
  const { setDataManual, isLoading } = useDataStore();

  useEffect(() => {
    setDataManual();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        toast({
          title: "Server Wake-Up Call",
          description:
            "Our server decided to take a nap. Reviving the service will take about 1 minute.",
        });
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex-col min-h-screen ">
        <div className="top-0 sticky z-50 mx-2  ">
          <Header />
        </div>
        <div className=" lg:mx-10 my-4 gap-10 mx-4 ">
          {isLoading ? (
            <>
              <div className="flex-col gap-4 space-y-4  ">
                <div className="flex flex-col md:flex-row  gap-4 ">
                  <Card className=" flex p-4 gap-4 h-[50vh] md:w-[75%] w-[100%] rounded-xl bg-white dark:bg-gray-900">
                    <div className=" w-full flex flex-col space-y-4">
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                    </div>
                    <div className=" w-full flex flex-col space-y-4">
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                    </div>
                  </Card>
                  <Card className="flex p-4 h-[50vh] md:w-[25%] w-[100%] rounded-xl bg-white dark:bg-gray-900">
                    <div className=" w-full flex flex-col space-y-4">
                      <Skeleton className="h-1/6 w-full"></Skeleton>
                      <Skeleton className="h-5/6 w-full"></Skeleton>
                    </div>
                  </Card>
                </div>
                <div className="flex flex-col md:flex-row  gap-4 ">
                  <Card className=" h-[50vh] p-4 md:w-[50%] w-[100%] rounded-xl bg-white dark:bg-gray-900 grid md:gap-4 md:grid-cols-2 lg:grid-cols-2 align-middle ">
                    <div className=" justify-evenly md:justify-center w-full flex flex-col space-y-4">
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                    </div>
                    <div className=" justify-evenly md:justify-center w-full flex flex-col space-y-4">
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                      <Skeleton className="h-1/3 w-full"></Skeleton>
                    </div>
                  </Card>
                  <Card className="flex h-[50vh] md:w-[50%] w-[100%] rounded-xl bg-white dark:bg-gray-900">
                    <div className="flex w-full space-y-4  items-end p-4 gap-4">
                      <Skeleton className="h-4/6 w-full"></Skeleton>
                      <Skeleton className="h-2/6 w-full"></Skeleton>
                      <Skeleton className="h-1/6 w-full"></Skeleton>
                      <Skeleton className="h-3/6 w-full"></Skeleton>
                      <Skeleton className="h-5/6 w-full"></Skeleton>
                      <Skeleton className="h-2/6 w-full"></Skeleton>
                      <Skeleton className="h-1/6 w-full"></Skeleton>
                      <Skeleton className="h-2/6 w-full"></Skeleton>
                      <Skeleton className="h-3/6 w-full"></Skeleton>
                    </div>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            <TremorDashboard />
          )}
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
