import React from "react";
import "./style";
import CLoading from "../CLoading/CLoading";

interface IBtnStatus {
  isDisable?: Boolean;
  isLoading?: Boolean;
  className?: String;
  btnText?: String | Number;
  onClick?: (e?: any) => any;
}

const App = (props: IBtnStatus): JSX.Element => {
  const { isDisable = false, isLoading = false, btnText, className } = props;
  return (
    <div
      className={`
        btn  
        ${isDisable && "btn--disable"} 
        ${isLoading && "btn--loading"} 
        ${className && className}`}
    >
      {isLoading && (
        <div>
          <CLoading className="loading-icon"></CLoading> <span>Loading...</span>
        </div>
      )}
      {!isLoading && btnText}
    </div>
  );
};

export default App;
