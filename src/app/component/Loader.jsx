import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin width="200" color="#E62828" />
    </div>
  );
};

export default Loader;
