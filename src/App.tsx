import React from "react";

import StoreProvider from "@Components/common/CStoreProvider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import routeArr from "@Router";

import "./style";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <Link to="/about">about</Link>
        {routeArr(["HOME", "ABOUT"])}
      </Router>
    </StoreProvider>
  );
};

export default App;
