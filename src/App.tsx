import React, { useState, useCallback } from "react";
import { ImgTest, IconAdd } from "@Assets/images";
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
        className="confirm-btn"
        onClick={useCallback((): void => setBtnLoading(true), [])}
      >
        <p>确定</p>
      </CButton>
      <IconAdd className="imageTest"></IconAdd>
    </StoreProvider>
  );
};

export default App;
