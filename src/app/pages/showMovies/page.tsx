"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../../../styles/showmovies.css";
import Link from "next/link";
import Image from "next/image";

export default function Showmovies() {

  const [movies, setMovies] = useState<any[]>([]);

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
            <Link
              href={`/pages/showMovies/${item.id}`}
              key={index}
              className="showmovies_item"
            >
              
              <div className="showmovies_poster">
                <Image
                  alt="پوستر فیلم"
                  src={item.image.medium}
                  width={150}
                  height={250}
                  className="showmovies_poster_img"
                />
              </div>

              <div>
                <p>
                  {item.id} . {item.name} 
                </p>
                <p></p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
