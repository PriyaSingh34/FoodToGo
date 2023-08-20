import { useState, useEffect } from "react";

//this is useRestrocustom hook , i have not added this in the main code

const useRestaurantList = () => {
  const [allRestro, setAllRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.934626&lng=77.7054388&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setAllRestro(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestro(
            jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
  };
  return filteredRestro ,allRestro;
};

export default useRestaurantList;
