import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { persistConfig, persistUserConfig } from "./PersistConfig";

const persistedReducer = persistReducer(persistConfig, RootReducer);
const persistedUserReducer = persistReducer(persistUserConfig, RootReducer);
export const store = configureStore({
  reducer: {
    persistedReducer,
    persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
