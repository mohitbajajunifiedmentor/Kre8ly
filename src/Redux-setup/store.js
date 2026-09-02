import { configureStore } from "@reduxjs/toolkit";
import {
  FetchedDataReducer,
  roleReducer,
  tokenReducer,
  hiringReducer,
  affiliateReducer,
} from "./slice";
import { fetchApis } from "./api";

export const store = configureStore({
  reducer: {
    fetchedData: FetchedDataReducer,
    role: roleReducer,
    auth_token: tokenReducer,
    hire: hiringReducer,
    affiliate: affiliateReducer,
    [fetchApis.reducerPath]: fetchApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(fetchApis.middleware),
});
