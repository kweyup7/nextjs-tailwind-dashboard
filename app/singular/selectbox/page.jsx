import React from "react";
import CustomSelectBox from "./components/CustomSelectBox";

const SelectBoxPage = () => {
  return (
    <div className="rounded-lg mx-2 p-4">
      <h1 className="text-black text-xl"> Select your City</h1>
      <br />
      <CustomSelectBox />
    </div>
  );
};

export default SelectBoxPage;
