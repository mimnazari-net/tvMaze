"use client"
import Image from "next/image";
import "../../../styles/header.css";
import Link from "next/link";
import SearchBar from "./searchBar";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

function Header() {
  const isLoginUser: boolean = useSelector(
    (state: RootState) => state.tvMazeSlice.isLogin
  );

  const userInfo = useSelector((state: RootState) => state.tvMazeSlice.user);

  return (
    <div className="header">
      <div className="header_content">
        <div className="header_logo">
          <Image
            src="/tvm-header-logo.png"
            width={150}
            height={50}
            alt="logo"
          />
        </div>
        <div className="header_searchbar">
          <SearchBar />
        </div >
        <div className="header_login">
          {isLoginUser ?
          (<Link className="header_login_link" href={"/pages/login"}>
          <span>{userInfo.userName}</span>
        </Link>):(
          <div className="header_login">
          <Link className="header_login_link" href={"/pages/login"}>
            login
          </Link>
          <p className="header_login_p"> | </p>
          <Link className="header_login_link" href={"/pages/register"}>
            register
          </Link></div>
        )
        
        }
          
        </div>
      </div>
    </div>
  );
}
export default Header;
