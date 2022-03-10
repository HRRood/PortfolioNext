import { createSlice } from "@reduxjs/toolkit";

const namespace = "global";

const global = createSlice({
  name: namespace,
  initialState: {
    menuOpen: false,
    menuItems: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "History",
        path: "/history",
      },
      {
        group: "Projects",
        items: [
          {
            name: "Todo",
            path: "/my-todos",
          },
          {
            name: "Grocerylist",
            path: "/grocerylist",
          },
        ],
      },
      {
        name: "Contact",
        path: "/contact",
      },
      {
        name: "Login",
        path: "/login",
      },
    ],
  },
  reducers: {
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
  },
});

export const { setMenuOpen } = global.actions;

export default global.reducer;
