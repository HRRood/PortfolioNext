import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// reducers
import globalReducer from "./global.js";

export default configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
