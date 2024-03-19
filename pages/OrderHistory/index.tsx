import dynamic from "next/dynamic";
import React from "react";

const OrderHistoryPage = dynamic(
  () => import("@/components/OrderHistoryComponents/OrderHistoryPage"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full">
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      </div>
    )
   }
);

const index = () => {
  return (
    <OrderHistoryPage />
  );
};

export default index;
