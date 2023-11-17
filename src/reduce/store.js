import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {  contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";
import { authReducer } from "./auth/authSlice";

const persistConfig = {
  key: 'root',
    storage,
  whiteList:["contacts"]
}
const rootReducer = combineReducers({
  auth:authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
})
export const persistedContactReducer = persistReducer(persistConfig,rootReducer )



export const store = configureStore({
    reducer: persistedContactReducer,
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)