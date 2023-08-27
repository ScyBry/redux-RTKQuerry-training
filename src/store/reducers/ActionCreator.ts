import { AppDispatch } from "../store.ts";
import { IUser } from "../../models/IUser.ts";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       "https://64eb49a7e51e1e82c5772db1.mockapi.io/users",
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(userSlice.actions.usersFetchingError(error.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://64eb49a7e51e1e82c5772db1.mockapi.io/users",
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
