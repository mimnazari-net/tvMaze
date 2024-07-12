"use client"
import { useEffect, useState } from "react";
import "../../../../styles/searchBar.css"
export default function Searchbar() {
  const [searchItem, setSearchItem] = useState("");

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangeSearch = (e: InputEvent) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  // useEffect(() => {}, [searchItem]);

  return (
    <div className="searchbar_content">
      <input
        type="search"
        placeholder="search..."
        className="searchbar_input"
        onChange={handleChangeSearch}
        value={searchItem}
      />
      <button className="searchbar_btn">icon</button>
    </div>
  );
}
