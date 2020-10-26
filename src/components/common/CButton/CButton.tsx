import React, { memo, useContext } from "react";
import "./style";
import CLoading from "../CLoading/CLoading";
import { Store } from "@Store";

interface IBtnStatus {
  name?: string;
  isDisable?: Boolean;
  isLoading?: Boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e?: any) => any;
}
export default memo(
  (props: IBtnStatus): JSX.Element => {
    const { state } = useContext(Store);
    console.log(state.theme, "btn 渲染");
    const { isDisable = false, isLoading = false, className, onClick } = props;
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
        {!isLoading && props.children}
        {!isLoading && !props.children && props.name}
      </div>
    );
  }
);
