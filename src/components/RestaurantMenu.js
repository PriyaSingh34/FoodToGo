import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

function RestaurantMenu() {
  //created a custom hhok to fetch data
  // const [resInfo, setResInfo] = useState(null);

  // const params=useParams()
  // console.log(params)

  const { resid } = useParams();
  //custom hooks
  const resInfo = useRestaurantMenu(resid);
  const [showIndex, setShowIndex] = useState(null);

  // console.log(params)
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API+resid);
  //   const jsonDataa = await data.json();
  //   // console.log(jsonDataa);
  //   setResInfo(jsonDataa.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="text-center  ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* categories accordians */}

      {/* //to get the categories in the menu */}
      {categories.map((category, index) => (
        <RestaurantCategories
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index===showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
      {/* {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs"}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))} */}

      {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>

        <li>Burger</li>
        <li>Pizza</li> */}
    </div>
  );
}

export default RestaurantMenu;
