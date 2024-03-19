import React from "react";

interface TableBodyDataProps {
  data: {
    id: number;
    product: string;
    size: string;
    color: string;
    total: number;
    quantity: number;
  }[];
}

interface TableHeadDataProps {
  headers: {
    name: string;
    minWidth: number;
    maxWidth: number;
  }[];
}

const InvoiceTable: React.FC<TableHeadDataProps & TableBodyDataProps> = ({
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
              className={`min-w-[${item?.minWidth}px] max-w-[${item?.maxWidth}px] h-[40px] flex items-center`}>
              <h1 className="font-bold">{item?.name}</h1>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex flex-col gap-[16px]">
            {data?.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between text-[14px] gap-[10px]">
                <div
                  className={`min-w-[100px] max-w-[120px] h-[40px] flex items-center`}>
                  {item?.id}
                </div>

                <div className="min-w-[180px] max-w-[200px] h-[60px] flex items-center">
                  <div>
                    <div>
                      <h1>{item?.product}</h1>
                    </div>
                    <div className="flex  items-center gap-5 my-1">
                      <p>Size - {item?.size}</p>
                      <p>Color - {item?.color}</p>
                    </div>
                  </div>
                </div>
                <div className="min-w-[100px] max-w-[120px] h-[40px] flex items-center text-[16px] ">
                  {item?.quantity}
                </div>

                <div className="min-w-[100px] max-w-[120px] h-[40px] flex items-center text-[16px] text-[#196FE1] ">
                  ₹ {item?.total}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="bg-black hidden xl:inline h-1" />
        <div className="flex flex-col gap-3 ">
          <div className="w-full flex items-center justify-end  xl:mr-36 my-5 text-[14px] gap-[10px]">
            {/* <div className="xl:flex xl:justify-end xl:mr-36 my-5 xl:items-center"> */}
            <div className="flex flex-col  gap-2 w-[332px]">
              <h1 className=" flex justify-between items-center">
                <span className="font-medium text-[16px] ">Sub Total</span>
                <span className="text-[#196FE1] font-normal text-[14px]">
                  ₹ 2000
                </span>
              </h1>
              <h1 className=" flex justify-between items-center">
                <span className="font-medium text-[16px] ">
                  Estimated Tax (12.5%)
                </span>
                <span className="text-[#196FE1] font-normal text-[14px]">
                  ₹ 2000
                </span>
              </h1>
              <h1 className=" flex justify-between items-center">
                <span className="font-medium text-[16px] ">
                  Discount (vELZON15)
                </span>
                <span className="text-[#196FE1] font-normal text-[14px]">
                  ₹ 2000
                </span>
              </h1>
              <h1 className=" flex justify-between items-center">
                <span className="font-medium text-[16px] ">
                  Shipping Charge
                </span>
                <span className="text-[#196FE1] font-normal text-[14px]">
                  ₹ 2000
                </span>
              </h1>
            </div>
            {/* </div> */}
          </div>
          <div className="flex justify-start items-start">
            <div className="flex justify-start items-center gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-[16px]">Payment Details:</h1>
                <h1 className="text-[14px] font-normal">
                  <span>paymentMethod:</span> <span>Master Card</span>
                </h1>
                <h1 className="text-[14px] font-normal">
                  <span>cardHolder:</span> <span>Rechi Wilson</span>
                </h1>
                <h1 className="text-[14px] font-normal">
                  <span>cardNumber:</span> <span>1806232865</span>
                </h1>
                <h1 className="text-[14px] font-normal">
                  <span>totalAmount:</span> <span>₹ 10,116</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;
