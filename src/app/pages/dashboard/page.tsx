"use client";
import UserAccount from "../../Components/userAccount";
import "../../../../styles/dashboard.css";
import Image from "next/image";
import { RiUser6Line } from "react-icons/ri";
import { IoExitOutline, IoRefresh } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logOut, showComponents } from "../../../../redux/tvMazeSlice";
import { RootState } from "../../../../redux/store";
import Favorite from "../../Components/favorite";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedComponent = useSelector(
    (state: RootState) => state.tvMazeSlice.selectedComp
  );

  return (
    <main className="dashboard_main">
      <div className="dashboard_container  ">
        <div className="dashboard_content ">
          <div className="dashboard_content_right">
            <div className="dashboardbox_box ">
              {typeof window !== "undefined" ? (
                window.innerWidth <= 320 ? (
                  ""
                ) : (
                  <Image
                    alt=""
                    width={100}
                    height={40}
                    src={"/tvm-header-logo.png"}
                  ></Image>
                )
              ) : (
                ""
              )}
              <div className="dashboardbox_link_col">
                <RiUser6Line size={24} />
                <button
                  onClick={() => dispatch(showComponents("0"))}
                  className="dashboardbox_button"
                >
                  User page
                </button>
              </div>
              <hr />
              <div className="dashboardbox_link_col">
                <IoRefresh size={24} />
                <button
                  onClick={() => dispatch(showComponents("2"))}
                  className="dashboardbox_button"
                >
                  Favorite
                </button>
              </div>
              <hr />
              <div className="dashboardbox_link_col">
                <IoExitOutline size={24} />

                <button
                  onClick={() => {
                    router.replace("/");
                    dispatch(logOut(false));
                  }}
                  className="dashboardbox_button"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
          <div className="dashboard_content_left">
            {selectedComponent === "0" ? (
              <UserAccount />
            ) : selectedComponent === "2" ? (
              <Favorite />
            ) : (
              <UserAccount />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
