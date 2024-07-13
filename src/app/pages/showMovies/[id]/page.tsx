import Image from "next/image";
import React from "react";
import "../../../../../styles/single.css";

const getData = async (id: string) => {
  try {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    console.log(res);
    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    const data = await res.json();
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const SingleFilm = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  console.log(data);

  if (!data) {
    console.log(data);
    return <p>Not found</p>;
  }

  return (
    <div className="singleFilm_container">
      <div className="singleFilm_leftSide">
        <Image
          className="singleFilm_poster"
          width={240}
          height={600}
          alt="poster of film"
          src={data?.image.medium}
        />
      </div>
      <div className="singleFilm_rightSide">
        <h1 className="singleFilm_rightSide_txt">{data?.name}</h1>
        <div>Year: {data?.premiered}</div>
        <div>Released: {data?.ended || "N/A"}</div>
        <div>Runtime: {data?.runtime} minutes</div>
        <div>Status: {data?.status}</div>
        <div>Plot: {data?.summary}</div>
        <div>Country: {data?.network?.country?.name || "N/A"}</div>
        <div>IMDB: {data?.rating.average ?? "N/A"}</div>
      </div>
    </div>
  );
};

export default SingleFilm;
