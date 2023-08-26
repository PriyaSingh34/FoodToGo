import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories=({data,showItems,setShowIndex})=> {
// remove this to make it a controlled component by its parent
    // const [showItems,setShowItems]=useState(false);
// console.log(setShowIndex)
    const handleClick=()=>{
        // setShowItems(!showItems);
        setShowIndex();
    }
  // console.log(showItems);
  // console.log(data);
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 shadow-lg p-4  ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span>
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span>⬇️</span>
        </div>
        {/*accordian body*/}
       {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategories;
