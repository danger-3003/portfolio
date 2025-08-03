import React from 'react'

export const Text = ({ children, onClick, className }) => {
  return (
    <>
      <p onClick={onClick} className={`${className} font-nunito`}>{children}</p>
    </>
  )
}

export const Heading = ({ children, className }) => {
  return (
    <>
      <h1 className={`${className} font-poppins`}>{children}</h1>
    </>
  )
}