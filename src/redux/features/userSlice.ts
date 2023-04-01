import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "../api/types";

interface UserState {
  user: UserType | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});
