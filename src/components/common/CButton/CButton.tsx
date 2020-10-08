import React, { memo } from "react";
import "./style";
import CLoading from "../CLoading/CLoading";

interface IBtnStatus {
  isDisable?: Boolean;
  isLoading?: Boolean;
  className?: String;
  btnText?: String | Number;
  onClick?: (e?: any) => any;
}

export default memo(
  (props: IBtnStatus): JSX.Element => {
    const { isDisable = false, isLoading = false, btnText, className, onClick } = props;
    console.log("opopo");
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
