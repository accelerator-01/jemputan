import { useState } from "react";
import Button from "../utils/Button";

function ChooseSchool() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState("");

  const schoolNames = [
    "SDN 01 Tuah Karya",
    "SDN 01 Cipta Karya",
    "SMPN 01 Tuah Karya",
    "SMPN 01 Cipta Karya",
  ];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectSchool = (schoolNames) => {
    setSelectedSchool(schoolNames);
    setIsOpen(false);
  };

  return (
    <div className="inline-block mb-2">
      <Button color="blue" size="sm" onClick={toggleOpen}>
        {selectedSchool || "Pilih Sekolah"}
      </Button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {schoolNames.map((schoolNames, index) => (
              <button
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => handleSelectSchool(schoolNames)}
              >
                {schoolNames}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChooseSchool;
