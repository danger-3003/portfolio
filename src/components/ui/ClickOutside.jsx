"use client"

import React, { useRef, useEffect } from 'react'

function ClickOutside({ onClickOutside, children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        onClickOutside(event);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClickOutside]);

  return (
    <>
      <div ref={sectionRef}>
        {children}
      </div>
    </>
  )
}

export default ClickOutside