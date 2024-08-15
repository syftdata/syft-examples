import React from "react";
import Link from "next/link";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <Link href="/">
      <h2 style={{color: "white"}}>Syft App</h2>
      </Link>
    </div>
  );
};
