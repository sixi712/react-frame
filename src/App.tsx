import React from "react";
import Root from "@Root";
import { Link } from "react-router-dom";

import "./style";

const App: React.FC = () => {
  return (
    <Root>
      <Link to="/about">about</Link>
      <Link to="/">home</Link>
    </Root>
  );
};

export default App;
