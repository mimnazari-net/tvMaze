import Image from "next/image";
import React from "react";

const getData = async (id: number) => {
  const data = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return data.json();
};

const single_film = async ({ params }: { params: any }) => {
  const data: any = await getData(params.id);

  if (!data.id) {
    return <p>Not found</p>;
  }
  console.log(data);
  
  return (
    <div className="flex justify-between bg-slate-100 p-5 m-5 rounded-xl h-[800px]">
      <div className="w-40 ">
        <Image
          className="rounded-xl"
          width={240}
          height={600}
          alt="poster of film"
          src={data.image.medium}
        />
      </div>
      <div className="w-50 ml-10">
        <h1 className="text-red-700 font-bold ">{data.name}</h1>
        <div>Year:{data.premiered}</div>
        <div>Released{data.ended}</div>
        <div>Runtime:{data.runtime}</div>
        <div>Writer:{data.writer}</div>
        <div>status:{data.status}</div>
        <div>Plot:{data.plot}</div>
        <div>Country: {data.country.name}</div>
        <div> IMDB: {data.rating.average}</div>
        
      </div>
    </div>
  );
};

export default single_film;
