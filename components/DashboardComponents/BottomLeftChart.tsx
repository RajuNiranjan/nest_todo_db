import { ApexOptions } from "apexcharts";
import Image from "next/image";
import React from "react";
import Chart from "react-apexcharts";
import AudienceIcon from "./icons/Audience.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const BottomLeftChart = () => {
  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  const series = [
    {
      name: "Male",
      data: [28000, null, null],
    },
    {
      name: "Female",
      data: [null, 20000, null],
    },
    {
      name: "Transgender",
      data: [null, null, 14000],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
    },
    grid: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20px", // Set the height of the bars
        distributed: true, // Distribute bars evenly
        borderRadius: 10,
      },
    },
    colors: ["#4071f1", "#e340f1", "#f1aa40"], // Set custom colors for each bar
    dataLabels: {
      formatter: function (val: any, opt: any) {
        return val;
      },
    },
    xaxis: {
      categories: ["Male", "Female", "Transgender"],
      labels: {
        show: true, // Hide the x-axis label
        style: {
          colors: isDarkModeEnableState ? "white" : "#333"
        }
      },
    },
    yaxis: {
      labels: {
        show: true, // Hide the y-axis label
        style: {
          fontSize: "16px",
          fontWeight: 600,
          colors: isDarkModeEnableState ? "white" : "#333",
        },
      },
    },
    legend: {
      show: false,
      showForSingleSeries: true,
      customLegendItems: ["Male", "Female", "Transgender"],
      markers: {
        fillColors: ["#4071f1", "#e340f1", "#f1aa40"],
      },
    },
  };

  return (
    <div className={`w-full h-full transition-all duration-500 ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md rounded-[8px] px-[20px] box-border py-[20px]`}>
      <div className="w-full flex items-center justify-between mb-[20px]">
        <div className="flex gap-[20px] items-center">
          <Image
            src={AudienceIcon}
            alt="Audience icon"
            width={48}
            height={48}
            className="w-[48px] h-[48px] object-cover"
          />

          <div className="h-[48px] flex flex-col justify-between">
            <p className="text-[24px] font-semibold">Audience</p>

            <p className="text-[14px]">Customers have visited</p>
          </div>
        </div>

        <div className="flex gap-[8px] items-center">
          <p className="text-[14px] font-semibold">Feb, 2023</p>

          <div
          className="text-[#196fe1]">
            <CalendarMonthIcon />
          </div>
        </div>
      </div>

      <Chart series={series} type="bar" options={options} width={expandedSidebarShow ? '85%' : '100%'} height={320} />
    </div>
  );
};

export default BottomLeftChart;
