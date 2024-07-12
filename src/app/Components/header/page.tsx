import Image from "next/image";
import "../../../../styles/header.css";
import Link from "next/link";
import SearchBar from "../searchBar/page"

function Header() {
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
        </div>
        <div className="header_login">
          <Link className="header_login_link" href={"/pages/login"}>
            login
          </Link>
          <p className="header_login_p"> | </p>
          <Link className="header_login_link" href={"/pages/register"}>
            register
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
