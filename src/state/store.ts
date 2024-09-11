import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/contactSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // Key for localStorage
  storage, // Storage method (localStorage by default)
};

// This Redux Persist makes to store this contacts in local Storage such that It never goes while reloading
const persistedReducer = persistReducer(persistConfig, contactReducer);

const store = configureStore({
  reducer: {
    contact: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
