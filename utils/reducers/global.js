import { createSlice } from "@reduxjs/toolkit";

const namespace = "global";

// export const funcname = createAsyncThunk(
//   `${namespace}/test`,
//   async () => {
//     return something;
//   }
// );

const global = createSlice({
  name: namespace,
  initialState: {
    menuOpen: false,
    loggedIn: null,
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
        name: "Private",
        path: "/privatepage",
      },
      {
        name: "Login",
        path: "/login",
        hideWhenLoggedin: true,
      },
      {
        name: "Logout",
        path: "/logout",
        hideWhenNotLoggedin: true,
      },
    ],
  },
  reducers: {
    setMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
    setUserLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setMenuOpen, setUserLoggedIn } = global.actions;

export default global.reducer;
