import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import AddressDetails from "@/ui/address_details";
import { FaPrint } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import React, { useRef } from "react";
import InvoiceTable from "@/components/invoice_details/invoice_details_table";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const addressData = [
  {
    addressType: "Billing Address Details",
    clinetName: "Rechi Wilson",
    landmark: "Gelaxy Towers",
    address: "Raidurg, Raidurg Police Station, Hyderabad, Telangana",
  },
  {
    addressType: "Shipping Address Details",
    clinetName: "Rechi Wilson",
    landmark: "Gelaxy Towers",
    address: "Raidurg, Raidurg Police Station, Hyderabad, Telangana",
  },
];

const TableHeadData = [
  {
    name: "#",
    minWidth: 100,
    maxWidth: 120,
  },
  {
    name: "Product",
    minWidth: 180,
    maxWidth: 200,
  },
  {
    name: "Quantity",
    minWidth: 100,
    maxWidth: 120,
  },
  {
    name: "Total",
    minWidth: 100,
    maxWidth: 120,
  },
];

const TableBodyData = [
  {
    id: 1,
    product: "Navy Bluc Smart LiVatch",
    size: "XL",
    color: "Blue",
    total: 2000,
    quantity: 2,
  },
  {
    id: 2,
    product: "Navy Bluc Smart LiVatch",
    size: "XL",
    color: "Blue",
    total: 2000,
    quantity: 2,
  },
  {
    id: 3,
    product: "Navy Bluc Smart LiVatch",
    size: "XL",
    color: "Blue",
    total: 2000,
    quantity: 2,
  },
];

const InvoicePage = () => {
  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  const componentRef = useRef(null);
  const downloadInvoice = (e: any) => {
    e.preventDefault();
    const input = document.getElementById("invoice-content");

    if (!input) {
      console.error("Element with id 'invoice-content' not found");
      return;
    }

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (imgHeight > pdfHeight) {
        const ratio = pdfHeight / imgHeight;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth * ratio, pdfHeight);
      } else {
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      }

      pdf.save("invoice.pdf");
    });
  };

  return (
    <div
      className={`w-full min-h-screen transition-all duration-500 ${
        isDarkModeEnableState ? "bg-[#333333]" : "bg-[#ebeef0]"
      }`}>
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div
        className={`w-full pt-[100px] transition-all duration-500 ${
          expandedSidebarShow ? "pl-[240px]" : "pl-[20px] 700px:pl-[90px]"
        } pr-[20px] pb-[20px] relative`}>
        <div>
          <ReactToPrint
            trigger={() => (
              <button className="absolute bottom-[133px] w-[350px] ml-5 xl:bottom-20 xl:right-60 flex items-center bg-[#196FE1] h-10 justify-center gap-1 xl:w-max px-3 rounded-md  text-white ">
                <FaPrint className="text-xl" />
                <span className="font-semibold text-[16px]">Print</span>
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>

        <form id="invoice-content">
          <h1
            className={`text-[36px] font-semibold transition-all duration-500 ${
              isDarkModeEnableState && "text-white"
            }`}>
            Transaction Details
          </h1>
          <div>
            <div
              className={`transition-all duration-500 ${
                isDarkModeEnableState ? "bg-black text-white" : "bg-white"
              } rounded-md shadow-md border my-10 border-blue-300 w-full flex flex-col gap-5  p-5`}>
              <div ref={componentRef} className="flex flex-col gap-5  p-5">
                <div className="flex justify-between flex-col xl:flex-row  gap-3 xl:items-center  w-full">
                  <h1 className="text-[24px] font-semibold">Order#0231</h1>
                  <button className="w-max font-semibold text-[24px] text-white px-2 bg-[#196FE1] rounded-md">
                    Completed
                  </button>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 w-full gap-4">
                  {addressData?.map((item, index) => (
                    <AddressDetails key={index} {...item} />
                  ))}
                </div>
                <div className="flex flex-row xl:flex-col xl:gap-4">
                  <div className="flex flex-col xl:flex-row gap-3 xl:gap-0 xl:items-center justify-between">
                    <div>
                      <h1 className="font-semibold text-sm xl:text-[18px]">
                        Email
                      </h1>
                      <p className="xl:text-[16px] text-sm font-normal text-[#196FE1]">
                        sample@gamil.com
                      </p>
                    </div>
                    <div className="w-[150px]">
                      <h1 className="font-semibold text-sm xl:text-[18px]">
                        Shipping Method
                      </h1>
                      <p className="xl:text-[16px] text-sm font-normal">
                        Flat Rate
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between">
                    <div>
                      <h1 className="font-semibold text-sm xl:text-[18px]">
                        Phone
                      </h1>
                      <p className="xl:text-[16px] text-sm font-normal text-[#196FE1]">
                        123-456-7890
                      </p>
                    </div>
                    <div className="w-[150px]">
                      <h1 className="font-semibold text-sm xl:text-[18px]">
                        Payment Via
                      </h1>
                      <p className="xl:text-[16px] text-sm font-normal">
                        Cash On Delivery
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`transition-all duration-500 ${
                    isDarkModeEnableState ? "bg-[#333333]" : "bg-white"
                  } border rounded-md shadow-md p-5 my-5 overflow-x-auto`}>
                  <InvoiceTable headers={TableHeadData} data={TableBodyData} />
                </div>
              </div>
              <div className="flex flex-col xl:flex-row w-full xl:justify-end gap-3 print">
                {/* <button className="hidden flex  items-center h-10 justify-center gap-1 xl:w-max px-3 rounded-md bg-[#196FE1] text-white">
                  <FaPrint className="text-xl" />
                  <span className="font-semibold text-[16px]">Print</span>
                </button> */}

                <button
                  onClick={downloadInvoice}
                  className="flex  items-center h-10 justify-center gap-1 xl:w-max px-3 rounded-md bg-[#196FE1] text-white">
                  <MdOutlineFileDownload className="text-xl" />
                  <span className="font-semibold text-[16px]">
                    Download Invoice
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoicePage;
