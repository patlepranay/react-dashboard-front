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
      <main className="flex-col min-h-screen mx-5">
        <div className="top-0 sticky z-50   ">
          <Header />
        </div>
        <div className="flex lg:mx-10 my-4 gap-10 relative ">
      
          <TremorDashboard />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
