"use client";
import "../../../../styles/login.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@mui/material/Alert";
import {
  addUser,
  fillUserAccount,
  userType,
} from "../../../../redux/tvMazwSlice";
import { useDispatch, useSelector } from "react-redux";


export default function login() {
  const router = useRouter();
 
  const dispatch = useDispatch();

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  let agre: boolean = false;
  // alerts
  const [showUserAlert, setShowUserAlert] = useState(false);
  const [showPhoneAlert, setShowPhoneAlert] = useState(false);
  const [showNullPhoneAlert, setShowNullPhoneAlert] = useState(false);

  const handleCloseUserAlert = () => {
    setShowUserAlert(false);
  };

  const handleClosePhoneAlert = () => {
    setShowPhoneAlert(false);
  };

  const handleCloseNullPhoneAlert = () => {
    setShowNullPhoneAlert(false);
  };

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangePhoneNumber = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };

  const handleChangeUsername = (e: InputEvent) => {
    const regex = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setUsername(e.target.value);
    }
  };

  let userObj: userType = {
    userName: username,
    phoneNumber: phoneNumber,
  };

  return (
    <div className="login_container">
      <div className="login_right_side">
        {showUserAlert && (
          <Alert
            severity="error"
            onClose={handleCloseUserAlert}
            style={{ marginBottom: "10px" }}
          >
            لطفا نام کاربری خود را وارد نمایید
          </Alert>
        )}
        {showNullPhoneAlert && (
          <Alert
            severity="error"
            onClose={handleCloseNullPhoneAlert}
            style={{ marginBottom: "10px" }}
          >
            لطفا شماره تماس خود را وارد نمایید
          </Alert>
        )}
        {showPhoneAlert && (
          <Alert severity="warning" onClose={handleClosePhoneAlert}>
            لطفا شماره تماس خود را صحیح وارد نمایید
          </Alert>
        )}

        <div className="login_right_side_container">
          <p className="login_right_side_title">خوش آمدید!</p>

          <div className="login_right_side_inputs">
            <div className="login_right_side_inputs_i">
              <FaRegUser />
            </div>
            <input
              value={username}
              maxLength={30}
              onChange={handleChangeUsername}
              placeholder="نام و نام خانوادگی"
            />
          </div>

          <div className="login_right_side_inputs">
            <div className="login_right_side_inputs_i2">
              <AiOutlinePhone />
            </div>
            <input
              value={phoneNumber}
              maxLength={11}
              onChange={handleChangePhoneNumber}
              
              placeholder="شماره تماس"
            />
          </div>

          <div className="login_ruls">
            <input
              type="checkbox"
              name="agreement"
              onChange={(e) => {
                agre = e.target.checked;
              }}
            />
            <p>تمامی ضوابط و قوانین را می پذیرم.</p>
          </div>

          <button
            className="login_btn "
            onClick={() => {
              var regex = new RegExp("^(0)?9\\d{9}$");
              var result = regex.test(phoneNumber);
              if (phoneNumber === "") {
                setShowNullPhoneAlert(true);
              } else {
                if (!result) {
                  setShowPhoneAlert(true);
                }
              }
              if (username === "") {
                setShowUserAlert(true);
              }

              if (username !== "" && result && agre) {
                dispatch(fillUserAccount(userObj));
                dispatch(addUser(userObj));
                router.replace("/pages/vertifycode");
              }
            }}
          >
            دریافت کد تایید
          </button>
        </div>
      </div>
      <div className="login_left_side "></div>
    </div>
  );
}
