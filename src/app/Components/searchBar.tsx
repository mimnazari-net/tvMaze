"use client";
import { useEffect, useState } from "react";
import "../../../styles/searchBar.css";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
export default function Searchbar() {
  const [searchItem, setSearchItem] = useState("");

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangeSearch = (e: InputEvent) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  const select = useSelector((state: RootState) => state.tvMazeSlice.movies);

  const [tmp, setTmp] = useState(select);

  useEffect(() => {
    let a = [...tmp];
    if (searchItem !== "") {
      const filteredItems = select.filter((item) =>
        item.name.includes(searchItem)
      );
      setTmp(filteredItems);
      console.log(tmp);
    } else setTmp(select);
  }, [searchItem]);

  return (
    <div className="searchbar_content">
      <input
        type="search"
        placeholder="search..."
        className="searchbar_input"
        onChange={handleChangeSearch}
        value={searchItem}
      />
      <button className="searchbar_btn" >
        <FaSearch />
      </button>
    </div>
  );
}
