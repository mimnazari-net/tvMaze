import { useSelector } from "react-redux";
import "../../../styles/favorite.css";
import UserPageHeader from "./userPageHeader";
import Image from "next/image";
import { RootState } from "../../../redux/store";

export default function Favorite() {

  const favSelect = useSelector(
    (state: RootState) => state.tvMazeSlice.favorites
  );

  return (
    <div className="favorite_container col-12">
      <div className="favorite_content col-10">
        <div className="col-12">
          <UserPageHeader />
        </div>
        <div className="favorite_map">
          {favSelect.map((item, index) => {
            return (
              <div key={index} className="favorite_item col-11">
                <h1>{item.name}</h1>
                <p> {item.id}</p>
                <button className="favorite_btn"> watch </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
