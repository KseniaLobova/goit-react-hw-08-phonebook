import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunk_API) => {
    try {
      const responce = await axios.post('/users/signup', data);
         setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      return thunk_API.rejectWithValue(error.message)
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', data);
    
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    console.log(thunkAPI)
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);
    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
console.log(refreshUser)