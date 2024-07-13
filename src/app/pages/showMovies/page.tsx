"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../../../styles/showmovies.css";
import Link from "next/link";
import Image from "next/image";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

export default function Showmovies() {
  const [movies, setMovies] = useState<any[]>([]);
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((d: any) => setMovies(d.data))
      .catch((e: any) => console.log(e));
  }, []);

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
                  setLiked(!liked);
                  console.log(liked)
                }}
              >
                {liked ? <FcLikePlaceholder /> : <FcLike />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
