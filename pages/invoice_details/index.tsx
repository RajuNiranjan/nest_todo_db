import React from "react";
import dynamic from "next/dynamic";

const InvoiceDetailsPage = dynamic(
  () => import("@/components/invoice_details/invoice_page"),
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
    ),
  }
);

const InvoicePage = () => {
  return <InvoiceDetailsPage />;
};
export default InvoiceDetailsPage;
