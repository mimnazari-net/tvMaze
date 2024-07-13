"use client";
// import css
import "../../../styles/userPageHeader.css";
// import icons
import { LuSearch } from "react-icons/lu";
import { RiHome5Line } from "react-icons/ri";
// import image
import Image from "next/image";
//import redux
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Link from "next/link";

export default function UserPageHeader() {
  const userinfo = useSelector((state: RootState) => state.tvMazeSlice.user);
  return (
    <div className="userPage_header">
      <div className="userPage_header_rightside">
        <div>
          <Image
            alt=""
            width={72}
            height={72}
            src={"/user-pic.png"}
          ></Image>
        </div>
        <div className="userPage_header_rightside_text">
          <p
            style={{
              fontWeight: "700",
            }}
          >
            {userinfo.userName}
          </p>
          <p style={{ color: "#292D32" }}>{userinfo.phoneNumber}</p>
        </div>
      </div>
      <div className="userPage_header_leftside ">
        <Link href={""} className=" userpage_header_link ">
          <p>search</p>
          <LuSearch size={24} />
        </Link>
        <hr className="userpage_header_hr" />
        <Link className="userpage_header_link " href={"/"}>
          <p>home</p>
          <RiHome5Line size={24} />
        </Link>
      </div>
    </div>
  );
}
