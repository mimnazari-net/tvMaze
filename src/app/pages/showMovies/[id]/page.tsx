import Image from "next/image";
import React from "react";

interface ShowData {
  id: number;
  name: string;
  image: { medium: string };
  premiered: string;
  ended: string | null;
  runtime: number;
  status: string;
  summary: string;
  network: { country: { name: string } };
  rating: { average: number | null };
}

const getData = async (id: string) => {
  try {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
    console.log(res)
    if (!res.ok) {
      throw new Error("failed to fetch")
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
  console.log(data)  

  if (!data) {
    console.log(data)
    return <p>Not found</p>;
  }

  return (
    <div className="flex justify-between bg-slate-100 p-5 m-5 rounded-xl h-[800px]">
      <div className="w-40">
        <Image
          className="rounded-xl"
          width={240}
          height={600}
          alt="poster of film"
          src={data?.image.medium}
        />
      </div>
      <div className="w-50 ml-10">
        <h1 className="text-red-700 font-bold">{data?.name}</h1>
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