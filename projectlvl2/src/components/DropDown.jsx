import React from 'react'
import { useState } from 'react';

const DropDown = () => {
    const [selectedValue,setSelectedValue] = useState("");
    const options = [
        {value:"Use Cases" ,label : "Use Cases"},
        {value:"Option 1" ,label : "Option 1"},
        {value:"Option 2" ,label : "Option 2"},
        {value:"Option 3" ,label : "Option 3"},
    ]

  return (
    <div>
        <select
        className='p-1 px-2 bg-transparent border-none cursor-pointer'
        value={selectedValue}
        onChange={(e)=>setSelectedValue(e.target.value)}
        >
            {
                options.map((opt)=>(
                    <option
                        key={opt.value}
                        value={opt.value}
                    >
                        {opt.label}
                    </option>
                ))
            }
        </select>
    </div>
  )
}

export default DropDown