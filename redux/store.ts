"use client"
import { configureStore } from "@reduxjs/toolkit";
import bilboardSlice from "./tvMazwSlice";
import tvMazwSlice from "./tvMazwSlice";

export function makeStore(){
  return configureStore({
    reducer:{
      tvMazeSlice: tvMazwSlice,
    }
  })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
