import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateAttribute from "./updateAttribute/UpdateAttribute";
import Pagination from "@mui/material/Pagination";
import { setAttributeData } from "@/redux/actions/attributeActions";
import { CiSearch } from "react-icons/ci";

interface Attribute {
  name: string;
  values: string;
  description: string;
  id: string;
}

const AttributeTable = () => {
  const dispatch = useDispatch();
  const [attributeData, setAttributeDataLocal] = useState<Attribute[]>([]);
  const [showUpdateAttribute, setShowUpdateAttribute] = useState(false);
  const [selectedAttributeId, setSelectedAttributeId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");

  const handleShowUpdateAttribute = (id: string) => {
    setSelectedAttributeId(id);
    setShowUpdateAttribute(!showUpdateAttribute);
  };

  const getAttributeData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://ts-api-for-ecomm-product.onrender.com/attributes",
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Data");
      }
      const data: Attribute[] = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      console.error("Error fetching attribute data:", error);
      setLoading(false);
      return [];
    }
  };

  useEffect(() => {
    getAttributeData().then((data) => {
      setAttributeDataLocal(data);
      dispatch(setAttributeData(data));
    });
  }, [dispatch]);

  console.log("data", attributeData);

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  // Filtered data based on search term
  const filteredData = attributeData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchTerm
    ? filteredData.slice(indexOfFirstItem, indexOfLastItem)
    : attributeData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <div className="flex items-center bg-[#eaeaea] border border-blue-300 rounded-md p-2 gap-2 my-5 text-black">
          <CiSearch
            className="text-xl cursor-pointer"
            onClick={() => setSearchTerm("")}
          />
          <input
            type="text"
            name="input"
            placeholder="Search Category"
            className="focus:outline-none bg-transparent flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div
        className="w-full  flex flex-col gap-[48px] overflow-auto"
        style={{ scrollbarWidth: "none" }}>
        <div className="w-full flex items-center justify-between text-[16px] font-bold gap-[10px]">
          <p className="px-[8px] py-[8px] min-w-[120px] max-w-[150px]">Name</p>

          <p className="px-[8px] py-[8px] min-w-[224px] max-w-[224px]">
            Description
          </p>

          <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">Value</p>

          <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-center">
            Action
          </p>
        </div>

        {currentItems.map((item, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between text-[16px]  gap-[10px]">
            <p className="px-[8px] py-[8px] min-w-[120px] max-w-[150px]">
              {item.name}
            </p>

            <p className="px-[8px] py-[8px] min-w-[224px] max-w-[224px]">
              {item.description}
            </p>

            <p className="px-[8px]  py-[8px] min-w-[120px] max-w-[2000px]">
              <span className="bg-[#a09f9f] text-white w-max p-2 rounded-md">
                {item.values}
              </span>
            </p>

            <p
              className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] font-semibold text-blue-500 cursor-pointer text-center"
              onClick={() => handleShowUpdateAttribute(item.id)}>
              Edit
            </p>
          </div>
        ))}

        {showUpdateAttribute && attributeData && (
          <div className=" w-full h-full p-2 fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50  top-0 z-10 flex justify-center items-center">
            <div
              className={`${
                isDarkModeEnableState ? "bg-black text-white" : "bg-white"
              } p-5 w-full xl:w-[1000px]  rounded-md shadow-xl border`}>
              {attributeData.find(
                (attr) => attr.id === selectedAttributeId
              ) && (
                <UpdateAttribute
                  attributeData={
                    attributeData.find(
                      (attr) => attr.id === selectedAttributeId
                    )!
                  }
                  onClose={() => setShowUpdateAttribute(false)}
                />
              )}
            </div>
          </div>
        )}

        <div className="w-full my-5 flex items-center justify-between gap-40">
          <div>
            <div>
              <div>
                <div className="text-[#b3b3b3] px-[8px] rounded-[8px] border border-[#b3b3b3] flex items-center gap-[10px]">
                  <select
                    value={currentPage}
                    onChange={(e) => paginate(Number(e.target.value))}
                    className="py-[8px] outline-none border-none bg-transparent">
                    {Array.from(
                      {
                        length: Math.ceil(attributeData.length / itemsPerPage),
                      },
                      (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          Sheet {i + 1}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Pagination
              count={Math.ceil(attributeData.length / itemsPerPage)}
              page={currentPage}
              onChange={(event, page) => paginate(page)}
              shape="rounded"
              variant="outlined"
              color="primary"
              size="large"
              className="text-[16px] font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributeTable;
