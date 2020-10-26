import React, { useState, useCallback } from "react";
import { ImgTest, IconAdd } from "@Assets/images";
import { CButton } from "@Components";
import baseConfig from "@BaseConfig";
const { baseUrl } = baseConfig;

export default () => {
  const [isLoading, setBtnLoading] = useState(false);
  const [count, setCount] = useState(0);
  console.log(baseUrl);
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
        name="确定"
        isLoading={isLoading}
        className="confirm-btn"
        onClick={useCallback((): void => setBtnLoading(true), [])}
      ></CButton>
      <IconAdd className="imageTest"></IconAdd>
    </>
  );
};
