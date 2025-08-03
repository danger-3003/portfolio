"use client"
import HeaderContent from "./HeaderContent";
import Quotation from "./Quotation";

function Header() {
  return (
    <>
      <div id="homeSection">
        <Quotation />
        <HeaderContent />
      </div>
    </>
  );
}

export default Header;