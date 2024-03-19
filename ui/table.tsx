import React from "react";


interface TableHeadDataProps {
  headers: string[];
}

interface TableBodyDataProps {
  data: {
    name: string;
    description: string;
    note: string;
    taxRate: string;
    countOfItems: string;
  }[];
}

const TableComponent: React.FC<TableHeadDataProps & TableBodyDataProps> = ({
  headers,
  data,
}) => {
  return (
    <div>
      <div
        className="w-full  flex flex-col gap-[48px] overflow-auto"
        style={{ scrollbarWidth: "none" }}>
        <div className="w-full flex items-center justify-between text-[16px] font-[500] gap-[10px]">
          {headers?.map((item, index) => (
            <div
              key={index}
              className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
              <h1 className="font-bold">{item}</h1>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex flex-col gap-[16px]">
            {data?.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between text-[14px] gap-[10px]">
                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
                  {item?.name}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
                  {item?.description}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
                  {item?.note}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center text-[16px] ">
                  {item?.taxRate}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center text-[16px] ">
                  {item?.countOfItems}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
