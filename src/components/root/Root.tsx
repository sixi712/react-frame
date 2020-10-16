import React from "react";
import RouterComp from "./router";
import StoreProvider from "./StoreProvider";
export default (props: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <RouterComp>{props.children}</RouterComp>
    </StoreProvider>
  );
};
