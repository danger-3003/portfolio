"use client";
import React from "react";

export const Text = ({ children, onClick, className, ...rest }) => {
  return (
    <p
      onClick={onClick}
      className={`text-sm sm:text-base ${className} font-nunito font-light`}
      {...rest}
    >
      {children}
    </p>
  );
};

export const Heading = ({ children, className, ...rest }) => {
  return (
    <h2
      className={`${className} font-poppins`}
      {...rest}
    >
      {children}
    </h2>
  );
};
