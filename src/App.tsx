import React from "react";
import { ImgTest } from "@Assets/Images";
import { CButton } from "@Components/common";
import "./style";

const App: React.FC = () => {
  const [isLoading, setBtnLoading] = React.useState(false);
  return (
    <div className="App">
      <p>{String(isLoading)}</p>
      <CButton
        isLoading={isLoading}
        btnText="确认"
        className="confirm-btn"
        onClick={(): void => setBtnLoading(true)}
      ></CButton>
      {/* <ImgTest className="image"></ImgTest> */}
    </div>
  );
};

export default App;
