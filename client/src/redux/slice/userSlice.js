import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/api";

const userSlice = createSlice({
  name: "user",
  initialState: {
    leaderBoard: null,
    isLogin: false,
    details: null,
    login: {
      success: null,
      errorsType: null,
      errors: {
        email: null,
        password: null,
      },
    },
    register: {
      success: null,
      errors: {
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
    },
  },
  reducers: {
    logout: (state) => void (state.isLogin = false),
    resetLogin: (state) =>
      void (state.login = {
        success: null,
        errorsType: null,
        errors: {
          email: null,
          password: null,
        },
      }),
    resetRegister: (state) =>
      void (state.register = {
        success: null,
        errors: {
          name: null,
          email: null,
          password: null,
          confirmPassword: null,
        },
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.leaderBoard = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.register.success = action.payload.success;

        // reset all errors properties to null
        Object.keys(state.register.errors).forEach(
          (i) => (state.register.errors[i] = null)
        );

        action.payload.errors &&
          action.payload.errors.forEach((err) => {
            if (err.param === "name") {
              state.register.errors.name = err.msg;
            } else if (err.param === "email") {
              state.register.errors.email = err.msg;
            } else if (err.param === "password") {
              state.register.errors.password = err.msg;
            } else if (err.param === "confirmPassword") {
              state.register.errors.confirmPassword = err.msg;
            }
          });
      })
      .addCase(login.fulfilled, (state, action) => {
        state.login.success = action.payload.success;

        if (state.login.success) {
          state.isLogin = true;
          state.details = action.payload.data;
        }

        state.login.errorsType = action.payload.type
          ? action.payload.type
          : null;
        // reset all errors properties to null
        Object.keys(state.login.errors).forEach(
          (i) => (state.login.errors[i] = null)
        );

        action.payload.errors &&
          action.payload.errors.forEach((err) => {
            if (err.param === "email") {
              state.login.errors.email = err.msg;
            } else if (err.param === "password") {
              state.login.errors.password = err.msg;
            }
          });
      });
  },
});

export const { resetRegister, resetLogin, logout } = userSlice.actions;

export const getAllUsers = createAsyncThunk(
  "user/getAllUsersStatus",
  async () => {
    const response = await api.getAllUser();
    return response.data;
  }
);

export const register = createAsyncThunk("user/register", async (data) => {
  const response = await api.register(data);
  return response.data;
});

export const login = createAsyncThunk("user/login", async (data) => {
  const response = await api.login(data);
  return response.data;
});

export default userSlice;
