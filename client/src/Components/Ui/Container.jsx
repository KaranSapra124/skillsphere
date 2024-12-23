import React from "react";

const Container = ({ children, className }) => {
  return <div className={`p-20 ${className}`}>{children}</div>;
};

export default Container;
