import React from "react";
import {reducer, initialState} from "@Store";
import { Context } from "@Types";

type StoreProviderProps = {
  children: React.ReactNode;
};

export const Store = React.createContext<Context>({} as Context);

const StoreProvider = (props: StoreProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

export default StoreProvider;
