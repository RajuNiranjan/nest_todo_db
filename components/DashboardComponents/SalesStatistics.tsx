import { RootState } from "@/redux/store";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const SalesStatistics = () => {

  const [activeFilter, setActiveFilter] = useState('')

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
    
  const series = [
    {
      name: "series 1",
      data: [20, 40, 30, 50, 70, 90, 60, 20, 40, 10, 50, 20],
    },
  ];

  const options: ApexOptions = {
    chart: {
      id: "basic-line",
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: isDarkModeEnableState ? "white" : "#333",
        }
      }
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      // show: false, // Set this to false to hide the Y-axis values and labels
      labels: {
        style: {
          colors: isDarkModeEnableState ? "white" : "#333",
        }
      }
    },
    grid: {
      show: false, // Set this to false to hide the background grid
    },
    markers: {
      size: 0, // Set the size of the hover dot
      colors: isDarkModeEnableState ? "white" : "#fff", // Set the color of the hover dot
      strokeColors: "#008FFB", // Set the border color of the hover dot
      strokeWidth: 4, // Set the border width of the hover dot
      hover: {
        size: 8, // Set the size of the hover dot when hovering over it
      },
    },
    tooltip: {
        enabled: true, // Enable tooltip
        enabledOnSeries: undefined, // Enable tooltip on all series
        x: {
          show: true, // Show tooltip on x-axis
        },
      },
    fill: {

    }
  };

  return (
    <div className={`w-full h-[650px] transition-all duration-500 ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md rounded-[8px] px-[20px] box-border py-[20px]`}>

      <div className="w-full flex justify-between gap-[20px] flex-wrap">

        <p className={`text-[18px] font-[600] ${isDarkModeEnableState ? 'text-white' : 'text-[#333333]'}`}>
          Sale Statistics
        </p>

        <div className="flex items-center gap-[20px] flex-wrap">

          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[20px] rounded-full border-2 border-[#b3b3b3] flex items-center justify-center cursor-pointer"
            onClick={()=>{ setActiveFilter('All') }}>
              <div className={`w-[10px] h-[10px] bg-[#b3b3b3] rounded-full ${activeFilter === 'All' ? 'block' : 'hidden'}`} />
            </div>
            <p className={`text-[14px] ${isDarkModeEnableState ? 'text-white':'text-[#b3b3b3]'}`}>
              All
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[20px] rounded-full border-2 border-[#b3b3b3] flex items-center justify-center cursor-pointer"
            onClick={()=>{ setActiveFilter('Sales') }}>
              <div className={`w-[10px] h-[10px] bg-[#b3b3b3] rounded-full ${activeFilter === 'Sales' ? 'block' : 'hidden'}`} />
            </div>
            <p className={`text-[14px] ${isDarkModeEnableState ? 'text-white':'text-[#b3b3b3]'}`}>
              Sales
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[20px] rounded-full border-2 border-[#b3b3b3] flex items-center justify-center cursor-pointer"
            onClick={()=>{ setActiveFilter('Visitors') }}>
              <div className={`w-[10px] h-[10px] bg-[#b3b3b3] rounded-full ${activeFilter === 'Visitors' ? 'block' : 'hidden'}`} />
            </div>
            <p className={`text-[14px] ${isDarkModeEnableState ? 'text-white':'text-[#b3b3b3]'}`}>
              Visitors
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="w-[20px] h-[20px] rounded-full border-2 border-[#b3b3b3] flex items-center justify-center cursor-pointer"
            onClick={()=>{ setActiveFilter('Products') }}>
              <div className={`w-[10px] h-[10px] bg-[#b3b3b3] rounded-full ${activeFilter === 'Products' ? 'block' : 'hidden'}`} />
            </div>
            <p className={`text-[14px] ${isDarkModeEnableState ? 'text-white':'text-[#b3b3b3]'}`}>
              Prodocuts
            </p>
          </div>

        </div>

      </div>

      <Chart
        series={series}
        type="area"
        options={options}
        height={500}
      />
    </div>
  );
};

export default SalesStatistics;
