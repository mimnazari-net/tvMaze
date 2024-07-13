"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../../../styles/showmovies.css";
import Link from "next/link";
import Image from "next/image";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { addtoFavorites, fillMovies } from "../../../../redux/tvMazeSlice";

export default function Showmovies() {
  const [movies, setMovies] = useState<any[]>([]);
  const [liked, setLiked] = useState<boolean>(true);
  const [likedStatus, setLikedStatus] = useState<{ [key: string]: boolean }>({})
  const select = useSelector((state: RootState) => state.tvMazeSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((d: any) => {
        setMovies(d.data);
        dispatch(fillMovies(d.data))
      })
      .catch((e: any) => console.log(e));
  }, []);

  const AddToFavList = (id: string, name: string) => {
    const isFav = select.favorites.find((elem) => elem.id === id);
    console.log(isFav);

    let items = {
      id,
      name,
    };

    if (isFav === undefined) {
      dispatch(addtoFavorites(items));
      // setLiked(true)
    } else {
      // remove from list
    }

    setLikedStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id]
    }))
  };

  return (
    <div className="showmovies_container">
      <div className="showmovies_content">
        {movies.map((item, index) => {
          return (
            <div className="showmovies_item">
              <Link
                href={`/pages/showMovies/${item.id}`}
                key={index}
                className="showmovies_link"
              >
                <div className="showmovies_poster">
                  <Image
                    alt="پوستر فیلم"
                    src={item.image.medium}
                    width={120}
                    height={160}
                    className="showmovies_poster_img"
                    unoptimized
                  />
                </div>

                <div className="showmovies_text">
                  {item.id} . {item.name}
                </div>
              </Link>
              <div
                className="showmovies_like"
                onClick={() => {
                  AddToFavList(item.id, item.name);
                }}
              >
                {likedStatus[item.id] ? <FcLike /> : <FcLikePlaceholder />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
