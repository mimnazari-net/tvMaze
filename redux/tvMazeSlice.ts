"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface userType {
  userName: string;
  phoneNumber: string;
}

interface initialState_type {
  arrUsers: userType[];
  user: userType;
  isLogin: boolean;
  selectedComp: string;
  favorites: any[]
}

const initialState: initialState_type = {
  arrUsers: [],
  user: {
    userName: "",
    phoneNumber: "",
  },
  isLogin: false,
  selectedComp: "",
  favorites: []
};

const tvMazeSlice = createSlice({
  name: "tvMaze",
  initialState,
  reducers: {
    addUser: (state, { payload }: { payload: userType }) => {
      let tmp = [...state.arrUsers];
      tmp.push(payload);
      if (state.arrUsers.length === 0) {
        state.arrUsers = tmp;
      } else {
        let cardExist = state.arrUsers.find(
          (card) => card.phoneNumber === payload.phoneNumber
        );
        if (cardExist !== undefined) {
          alert("شماره تماس تکراریست!");
        } else {
          state.arrUsers = tmp;
        }
      }
    },
    fillUserAccount: (state, { payload }: { payload: userType }) => {
      state.user.userName = payload.userName;
      state.user.phoneNumber = payload.phoneNumber;
      state.isLogin = true;
    },
    logOut: (state, { payload }: { payload: boolean }) => {
      state.isLogin = payload;
    },
    showComponents: (state, { payload }: { payload: string }) => {
      state.selectedComp = payload;
    },
    addtoFavorites: (state, { payload }: { payload: any }) => {
      let favItems = [...state.favorites]
      favItems.push(payload)
      state.favorites = favItems
      console.log(state.favorites)
    },
  },
});

export const { addUser, fillUserAccount, logOut , showComponents, addtoFavorites} = tvMazeSlice.actions;
export default tvMazeSlice.reducer;
