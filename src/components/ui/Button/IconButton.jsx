import React from 'react'

function IconButton({ children, onClick, className }) {
  return (
    <>
      <div className={`${className} cursor-pointer`} onClick={onClick}>
        {children}
      </div>
    </>
  )
}

export default IconButton