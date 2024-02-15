type ServerData = serverSingleData[];

type serverSingleData = {
  name: string;
  profit: number;
  revenue: number;
  lastTenYearData: lastTenYearData[];
};

type lastTenYearData = {
  totalRevenueValue: number;
  profitValue: number;
  employeeCount: number;
  year: number;
};
