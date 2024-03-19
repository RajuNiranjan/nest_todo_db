import SearchTrasaction from "@/components/transactions_history/search_transaction";
import TransactionTable from "@/components/transactions_history/transaction_table";
import Select from "@/ui/select";
import React from "react";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import TableComponent from "@/ui/table";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface searchTransactionSelector {
  name: string;
}

const selector: searchTransactionSelector[] = [
  {
    name: "Recent",
  },
  {
    name: "Month",
  },
];

// interface Transactions {
//   transactionId: number;
//   receverName: string;
//   receverId: number;
//   date: string;
//   action: JSX.Element;
//   path: string;
// }

const TableHeadData = [
  "Transaction ID",
  "Receiver Name",
  "Received ID",
  "Date",
  "Actions",
];

const TableBodyData = [
  {
    transactionId: 54651,
    receverName: "Different size for clothes",
    receverId: 6545,
    date: "15 May 2023 8:59 pm",
    action: (
      <p className="bg-blue-500 font-semibold rounded-full text-white p-1 px-3 text-center cursor-pointer w-max">
        View Details
      </p>
    ),
    path: "/transaction_details",
  },
  {
    transactionId: 35431,
    receverName: "childer, Watches",
    receverId: 35431,
    date: "15 May 2023 8:59 pm",
    action: (
      <p className="bg-blue-500 font-semibold rounded-full text-white p-1 px-3 w-max text-center cursor-pointer">
        View Details
      </p>
    ),
    path: "/transaction_details",
  },
];

const Transactions = () => {
  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className={`w-full min-h-screen transition-all duration-500 ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#ebeef0]'}`}>
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div className={`w-full pt-[100px] transition-all duration-500 ${expandedSidebarShow ? 'pl-[240px]' : 'pl-[20px] 700px:pl-[90px]'} pr-[20px] pb-[20px]`}>
        <div>
          <h1 className={`text-3xl font-semibold ${isDarkModeEnableState && 'text-white'}`}>Transactions History</h1>
        </div>
        <div className={`${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} shadow-md rounded-md my-10 p-5`}>
          <SearchTrasaction />
          <div className="flex gap-5 my-5 items-center">
            <p>Stored By</p>
            <div className="flex gap-3">
              {selector?.map((item, index) => (
                <Select key={index} name={item?.name} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <TransactionTable headers={TableHeadData} data={TableBodyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
