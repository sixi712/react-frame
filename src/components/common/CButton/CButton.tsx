import React, { memo, useContext } from "react";
import "./style";
import CLoading from "../CLoading/CLoading";
import { Store } from "@Components/common/CStoreProvider";

interface IBtnStatus {
  isDisable?: Boolean;
  isLoading?: Boolean;
  className?: String;
  btnText?: String | Number;
  onClick?: (e?: any) => any;
}
export default memo(
  (props: IBtnStatus): JSX.Element => {
    const { state } = React.useContext(Store);
    console.log(state.theme);
    const { isDisable = false, isLoading = false, btnText, className, onClick } = props;
    return (
      <div
        className={`
        btn  
        ${isDisable && "btn--disable"} 
        ${isLoading && "btn--loading"} 
        ${className && className}`}
        onClick={onClick}
      >
        {isLoading && (
          <div>
            <CLoading className="loading-icon"></CLoading> <span>Loading...</span>
          </div>
        )}
        {!isLoading && btnText}
      </div>
    );
  }
);
