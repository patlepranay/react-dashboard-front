import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type TableCompProps = {
  data: any;
  caption: string;
  header: string[];
};

const TableComp = ({ data, caption, header }: TableCompProps) => {
  const [company, setCompany] = useState();
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    setCompany(data.find((x) => x.name === selectedCompany));
  }, [data]);

  return (
    <div className="space-y-3">
      <Select
        onValueChange={(value) => {
          setSelectedCompany(value);
          setCompany(data.find((x) => x.name === value));
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a company" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a company</SelectLabel>
            {data.map((company: any, index: number) => {
              return (
                <SelectItem key={index} value={company.name}>
                  {company.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Table>
        <TableCaption>{caption}</TableCaption>
        <ScrollArea className="h-60 rounded-md border">
          <TableHeader>
            <TableRow>
              {header.map((title, index) => (
                <TableHead key={index} className="text-center">
                  {title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {company?.lastTenYearData.map((value, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-center">
                  {value.year}
                </TableCell>
                <TableCell className="text-center">
                  {value.totalRevenueValue}
                </TableCell>
                <TableCell className="text-center">
                  {value.profitValue}
                </TableCell>
                <TableCell className="text-center">
                  {value.employeeCount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ScrollArea>
      </Table>
    </div>
  );
};

export default TableComp;
