import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { useState } from "react";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: "Click Me", label: "Click Me" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ];

  return (
    
      <div>
        <select
            className="rounded-medium bg-yellow-500 text-black p-1 px-2 border-2 border-white btn rounded-md text-sm"
            // className="btn"
            value={selectedValue}
            onChange={(e)=>setSelectedValue(e.target.value)}
        >
            {
                options.map((opt)=>(
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))
            }
        </select>
      
    </div>
  );
};

export default Dropdown;
