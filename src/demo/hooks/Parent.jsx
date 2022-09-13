import React from "react";
// Childをimportする。
import { Child } from "./Child";

export const Parent = () => {
  return (
    <>
      <Child />
      <div className="line"></div>
    </>
  );
};
