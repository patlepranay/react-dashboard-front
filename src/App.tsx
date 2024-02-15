import { ThemeProvider } from "@/components/theme-provider";

import Header from "./components/shared/header";

import { useDataStore } from "./lib/state";
import { useEffect } from "react";
import TremorDashboard from "./components/shared/tremor-dashboard";

const App = () => {
  const { setDataManual } = useDataStore();
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
          <TremorDashboard />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
