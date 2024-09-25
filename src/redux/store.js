import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import counterReducer from "./counterSlice";
import drawerReducer from "./drawerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    drawer: drawerReducer
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
