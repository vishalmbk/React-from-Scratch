import { RES_IMG_URL } from "../../Utils/constants";

const RestaurentCard = (props) => {
  // console.log(props.resData.info.name);
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    totalRatingsString,
  } = props?.resData?.info;

  return (
    <div className="res-container">
      <div className="res-card">
        <img className="res-logo" src={RES_IMG_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars...</h4>
        <h6>{totalRatingsString} Total Ratings</h6>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};
export default RestaurentCard;
