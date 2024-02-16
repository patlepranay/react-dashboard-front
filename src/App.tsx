import { ThemeProvider } from "@/components/theme-provider";

import Header from "./components/shared/header";

import { useDataStore } from "./lib/state";
import { useEffect } from "react";
import TremorDashboard from "./components/shared/tremor-dashboard";
import { Skeleton } from "./components/ui/skeleton";

const App = () => {
  const { setDataManual, isLoading } = useDataStore();
  useEffect(() => {
    setDataManual();
  }, []);

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
                  <Skeleton className="h-[50vh] md:w-[75%] w-[100%] rounded-xl" />
                  <Skeleton className="h-[50vh] md:w-[25%] w-[100%] rounded-xl" />
                </div>
                <div className="flex flex-col md:flex-row  gap-4 ">
                  <Skeleton className="h-[50vh] md:w-[50%] w-[100%] rounded-xl" />
                  <Skeleton className="h-[50vh] md:w-[50%] w-[100%] rounded-xl" />
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
