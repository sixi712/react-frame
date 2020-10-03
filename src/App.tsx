import React from "react";
import { ImgTest } from "@Assets/Images";
import { CButton } from "@Components/common";
import "./style";

const App: React.FC = () => {
  return (
    <div className="App">
      <p>232323223</p>
      <CButton
        isLoading={true}
        btnText="确认"
        className="confirm-btn"
      ></CButton>
      {/* <ImgTest className="image"></ImgTest> */}
    </div>
  );
};

export default App;
