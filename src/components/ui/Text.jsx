"use client";
import React from "react";

export const Text = ({ children, onClick, className, ...rest }) => {
  return (
    <p
      onClick={onClick}
      className={`${className} font-nunito`}
      {...rest}
    >
      {children}
    </p>
  );
};

export const Heading = ({ children, className, ...rest }) => {
  return (
    <h1
      className={`${className} font-poppins`}
      {...rest}
    >
      {children}
    </h1>
  );
};
