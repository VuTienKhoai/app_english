import { RootState } from "../store";

export const appSelector = (state) => state.persistedReducer.app;
export const getTokenToolAIState = (state) =>
  state.persistedReducer.app.tokenToolAI;
