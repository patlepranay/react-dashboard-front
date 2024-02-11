import { ThemeProvider } from "@/components/theme-provider";

import Header from "./components/shared/header";
import Sidebar from "./components/shared/sidebar";

import Dashboard from "./components/shared/dashboard";
import { useDataStore } from "./lib/state";
import { useEffect } from "react";

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
        <div className="flex  mx-10 gap-10 relative ">
          <Sidebar />
          <Dashboard />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
