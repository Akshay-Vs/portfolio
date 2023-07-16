import React from "react";
import TextRoles from "./Roles";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="bg-dark h-screen w-screen">
        <div className="text-main">This Is Akshay Vs</div>
        <div className="line" />
        <TextRoles />
      </div>
    </div>
  );
};

export default Header;
