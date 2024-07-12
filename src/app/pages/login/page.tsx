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
        
        <div className="login_right_side_container">
          <p className="login_right_side_title">Wellcome !</p>
          <div className="login_right_side_inputs">
            <div className="login_right_side_inputs_i">
              <FaRegUser />
            </div>
            <input
              value={username}
              maxLength={30}
              onChange={handleChangeUsername}
              placeholder="username"
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
              
              placeholder="phone number"
            />
          </div>
          <button
            className="login_btn "
            onClick={() => {
              var regex = new RegExp("^(0)?9\\d{9}$");
              var result = regex.test(phoneNumber);

              if (username !== "" && result ) {
                dispatch(fillUserAccount(userObj));
                dispatch(addUser(userObj));
                // router.replace("/pages/");
              }
            }}
          >
            Login 
          </button>
        </div>
      </div>
      <div className="login_left_side"></div>
    </div>
  );
}
