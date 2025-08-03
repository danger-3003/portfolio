"use client";

import { useEffect, useState } from "react";

function HeaderImage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="">
      <img
        src={isMobile ? "/assets/quotation/QuotationSection.jpg" : "/assets/quotation/QuotationSection.svg"}
        alt="Quotation Image"
        className="w-full"
      />
    </div>
  );
}

export default HeaderImage;
