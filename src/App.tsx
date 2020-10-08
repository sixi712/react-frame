import React, { useState, useCallback } from "react";
import { ImgTest } from "@Assets/Images";
import { CButton } from "@Components/common";
import "./style";

const App: React.FC = () => {
  const [isLoading, setBtnLoading] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <CButton
        isLoading={isLoading}
        btnText="确认"
        className="confirm-btn"
        onClick={useCallback((): void => setBtnLoading(true), [])}
      ></CButton>
      {/* <ImgTest className="image"></ImgTest> */}
    </div>
  );
};

export default App;
