import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestro, setAllRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  // function filteredData(searchText,allRestro){
  //   const filterData=allRestro.filter((restro)=>
  //   restro.info.name.toLowerCase().includes(searchText)
  //   );
  //   return filterData;
  //   }

  //local state variable
  // const [allRestro,setAllRestro]=useState([
  //     {
  //       data: {
  //         id: "74453",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["burger", "pizza"],
  //         costForTwo: 4000,
  //         avgRating: "3.3",
  //       },
  //     },
  //     {
  //       data: {
  //         id: "74454",
  //         name: "KFC",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["burger", "pizza"],
  //         costForTwo: 4000,
  //         avgRating: "4.3",
  //       },
  //     },
  //     {
  //       data: {
  //         id: "74455",
  //         name: "MCD",
  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["burger", "pizza"],
  //         costForTwo: 4000,
  //         avgRating: "4.7",
  //       },
  //     },])

  // normal js variable
  // let allRestro = [
  //   {
  //     data: {
  //       id: "74453",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["burger", "pizza"],
  //       costForTwo: 4000,
  //       avgRating: "3.3",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "74454",
  //       name: "KFC",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["burger", "pizza"],
  //       costForTwo: 4000,
  //       avgRating: "4.3",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "74455",
  //       name: "MCD",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["burger", "pizza"],
  //       costForTwo: 4000,
  //       avgRating: "4.7",
  //     },
  //   },
  // ];

  useEffect(() => {
    //API Call
    getRestroFunc();
    // console.log("useeffect call  back func")
  }, []);

  async function getRestroFunc() {
    //await for the data to come from the swiggy API...but enable CORS in your browser
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.934626&lng=77.7054388&page_type=DESKTOP_WEB_LISTING"
    );
    //convert the stream of data to json
    const jsonData = await data.json();
    // console.log(jsonData);
    setAllRestro(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestro(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  // console.log("body rendered");

const onlineStatus=useOnlineStatus();
if(onlineStatus===false)
return(
  <h1>Looks like you are offline!! Please check your internet connection</h1>
)

  return allRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = allRestro.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setFilteredRestro(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>

        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(searchText);
            const filteredData = allRestro.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            console.log(filteredData);
            setFilteredRestro(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restro-container">
        {/* //you can use for loops as well */}
        {filteredRestro.map((res) => {
          return (
            <Link className="link" to={"/restaurants/"+res.info.id} key={res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
