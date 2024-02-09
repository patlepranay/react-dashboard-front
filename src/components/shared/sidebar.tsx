import { SunIcon, Sunrise } from "lucide-react";

const Sidebar = () => {
  const data = [
    {
      name: "Dashboard",
    },
    {
      name: "Profile",
    },
    {
      name: "Billing",
    },
    {
      name: "Settings",
    },
  ];
  return (
    <section className="hidden md:flex rounded-2xl my-10 bg-slate-50 dark:bg-slate-900  ">
      <div className="flex-col space-y-5 p-5 ">
        {data.map((value, index) => {
          return (
            <div className="flex hover:bg-slate-800 items-center p-2 rounded-md">
              <SunIcon className="w-[28px] h-[28px] mr-2"/>
              <h2 className="font-medium text-xl" key={index}>
                {value.name}
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
