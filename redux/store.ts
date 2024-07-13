"use client"
import { configureStore } from "@reduxjs/toolkit";
import bilboardSlice from "./tvMazeSlice";
import tvMazwSlice from "./tvMazeSlice";

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
