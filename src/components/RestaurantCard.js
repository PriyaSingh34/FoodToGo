import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData.info;
    return (
      <div className="flex flex-col rounded-lg hover:bg-gray-400 m-4 p-4 w-[250px] h-[425px] bg-gray-200">
        <img
          src={CDN_URL+cloudinaryImageId}
          alt=""
          className="res-img w-56 h-48 rounded-lg"
        />
        <h3 className="card-title font-bold py-3 text-lg">{name}</h3>
        <div className="card-info">
          <h4 className="info">{cuisines.join(", ")}</h4>
          <h4 className="info">{avgRating } stars</h4>
          <h4 className="info">{costForTwo}</h4>
          {/* <h4 className="info">{deliveryTime} min</h4> */}
        </div>
      </div>
    );
    // return (
    //   <div className="res-card">
    //     <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.data.cloudinaryImageId} alt="" className="res-img" />
    //     <h3 className="card-title">{resData.data.name}</h3>
    //     <div className="card-info">
    //     <h4 className="info">{resData.data.cuisines.join(", ")}</h4>
    //     <h4 className="info">{resData.data.avgRating}stars</h4>
    //     <h4 className="info">{resData.data.costForTwo / 100}</h4>
    //     <h4 className="info">{resData.data.deliveryTime} min</h4>
    //     </div>
    //   </div>
    // );
  };


  //Higher order component

  //input-RestaurantCard=> RestaurantCardPromoted

 export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
      return (
        <div>
          <label className="absolute bg-black rounded-lg m-2 p-2 text-white">Open</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;