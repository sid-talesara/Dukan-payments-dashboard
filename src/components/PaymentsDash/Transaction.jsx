import React, { useState } from "react";
import { useTable, useSortBy } from "react-table";
import paymentsData from "./data.json";
import Pagination from "./Pagination";
import { DownloadIcon, SearchIcon, SortIcon } from "../../assets/icons/icons";
const Transaction = () => {
  const [data, setData] = useState(paymentsData);
  const columns = React.useMemo(
    () => [
      {
        Header: "Order ID",
        accessor: "order_ID",
      },
      {
        Header: "Order Date",
        accessor: "order_date",
      },
      {
        Header: "Order Amount",
        accessor: "order_amount",
      },
      {
        Header: "Transaction Fees",
        accessor: "transaction_fees",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  const sortHandler = () => {
    const sortedData = [...data].sort((a, b) => {
      return new Date(b.order_date) - new Date(a.order_date);
    });
    setData(sortedData);
  };

  return (
    <section>
      <div className="text-[20px] font-medium">Transactions | This Month</div>

      <div className="mb-4 mt-5 bg-white rounded-md py-2 px-[10px] ">
        {/* taskbar */}
        <div className="flex justify-between items-center">
          {/* search bar  */}
          <div className="py-[6px] pr-2 pl-3 border  border-[#ccc] rounded-md flex gap-[6px] items-center w-[240px] text-[#71717a]">
            <SearchIcon />
            <input
              type="text"
              className="py-1 text-[14px] outline-none border-none w-full placeholder:text-[#71717a] rounded-md "
              placeholder="Search by Order ID"
            />
          </div>
          <div className="flex gap-5 ">
            <button
              onClick={sortHandler}
              className="flex items-center gap-[6px] py-[6px] px-[10px] border border-[#ccc] rounded-md"
            >
              Sort
              <SortIcon />
            </button>
            <a
              className="flex items-center gap-[6px] py-[6px] px-2 border border-[#ccc] rounded-md cursor-pointer"
              href="/Sid_Resume.pdf"
              download
            >
              <DownloadIcon />
            </a>
          </div>
        </div>

        {/* table */}
        <div className="mt-[10px] ">
          <table
            className="w-full  text-[14px] border-collapse"
            {...getTableProps()}
          >
            {/* headers */}
            <thead className="bg-[#f7f7f7] text-[#71717a] font-[400] text-left ">
              {headerGroups.map((headerGroup, index) => (
                <tr
                  className="flex justify-between items-center last:border-0 border-b-[2px] border-[#f7f7f7]"
                  key={index}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th
                      className={`last:px-0 last:pr-1 flex justify-center items-center py-[14px]  px-3 text-[#4d4d4d] ${
                        columnIndex === 1 ? "ml-20" : ""
                      } ${columnIndex === 2 ? "ml-20" : ""} `}
                      key={columnIndex}
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            {/* body */}
            <tbody {...getTableBodyProps()}>
              {rows.map((row, index) => {
                prepareRow(row);
                return (
                  <tr
                    className="border-b border-[#f7f7f7] flex justify-between items-center hover:bg-[#f7f7f79c]"
                    key={index}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell, cellIndex) => (
                      <td
                        className={`last:text-right  last:pr-   py-[14px] px-3  ${
                          cellIndex === 0 ? "text-[#146eb4]" : ""
                        }`}
                        key={cellIndex}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default Transaction;
