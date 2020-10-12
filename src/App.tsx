import React, { useState, useCallback } from "react";
import { ImgTest } from "@Assets/images";
import { CButton } from "@Components";
import StoreProvider from "@Components/common/CStoreProvider";
import "./style";

const App: React.FC = () => {
  const [isLoading, setBtnLoading] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <StoreProvider>
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
    </StoreProvider>
  );
};

export default App;
