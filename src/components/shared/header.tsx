import { RefreshCw, Sunrise } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { useDataStore } from "@/lib/state";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

const Header = () => {
  const { setDataManual, isLoading, mode, setMode } = useDataStore();

  const refreshHandler = () => {
    setDataManual();
  };

  const switchCheckedChanged = (value: boolean) => {
    setMode(value ? "Auto" : "Manual");
  };

  return (
    <header className=" p-2 dark:bg-slate-950 bg-white">
      <nav className="flex justify-between pb-2 ">
        <div className="flex gap-2 items-center">
          <Sunrise />
          <h1 className="font-bold">Company Logo</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="airplane-mode"
            onCheckedChange={(value) => switchCheckedChanged(value)}
          />
          <Label htmlFor="airplane-mode">Auto Mode</Label>
          <Button
            variant="outline"
            size="icon"
            onClick={refreshHandler}
            disabled={mode == "Auto" || isLoading}
          >
            <RefreshCw height={22} width={22} />
          </Button>
          <ModeToggle />
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
