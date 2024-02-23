import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ISidebar } from "./ISidebar";
import "./Sidebar.css";

const Sidebar: React.FC<ISidebar> = ({ routes, title }) => {
  const [activeLink, setActiveLink] = useState<string>(() => {
    return localStorage.getItem("activeLink") || "Seats";
  });

  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  const handleClick = (label: string) => {
    setActiveLink(label);
  };

  return (
    <section className="mainSideBarWrapper">
      <h1>{title}</h1>
      {routes?.map((route) => (
        <div className="linkWrapper" key={route?.label}>
          <b className={`${activeLink === route.label && "commonB topB"}`}></b>
          <Link
            to={route?.path}
            className={`toggle ${activeLink === route?.label && "active"}`}
            onClick={() => handleClick(route.label)}
          >
            {route?.label}
          </Link>
          <b
            className={`${activeLink === route?.label && "commonB bottomB"}`}
          ></b>
        </div>
      ))}
    </section>
  );
};

export default Sidebar;
