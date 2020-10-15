import React, { useState, useCallback } from "react";
import { ImgTest, IconAdd } from "@Assets/images";
import { CButton } from "@Components";

export default () => {
  const [isLoading, setBtnLoading] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
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
    </>
  );
};
