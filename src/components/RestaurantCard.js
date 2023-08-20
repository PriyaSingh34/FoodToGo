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
      <div className="res-card">
        <img
          src={CDN_URL+cloudinaryImageId}
          alt=""
          className="res-img"
        />
        <h3 className="card-title">{name}</h3>
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

  export default RestaurantCard;