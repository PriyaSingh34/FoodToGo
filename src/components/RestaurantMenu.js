import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {

  //ctreated a custom hhok to fetch data
  // const [resInfo, setResInfo] = useState(null);

  // const params=useParams()
  // console.log(params)


  const {resid} = useParams();

  
resInfo = useRestaurantMenu(resid);
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
  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs"}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}

        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>

        <li>Burger</li>
        <li>Pizza</li> */}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
