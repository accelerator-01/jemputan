// import { useState } from "react";
import TableQueue from "./TableQueue";

function TableList() {
  // const [showTable, setShowTable] = useState(false)
  return (
    <div className="flex items-center justify-center h-screen bg-background_2">
      <div className="p-8 m-4 h-4/5 rounded-lg shadow-lg text-center bg-teal-500">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">
          Daftar wali murid yang sudah di area sekolah
        </h1>
        <TableQueue />
      </div>
    </div>
  );
}

export default TableList;
