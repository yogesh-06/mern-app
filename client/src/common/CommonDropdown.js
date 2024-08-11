import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function CommonDropdown({ elements, selectedElement }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        onClick={() => setOpen(!open)}
      >
        Categories
      </a>
      {open && (
        <ul className="dropdown-menu show" aria-labelledby="navbarDropdown">
          {elements.map((element) => {
            return (
              <li
                key={element}
                onClick={() => {
                  selectedElement(element);
                  setOpen(false);
                  navigate("/");
                }}
              >
                <a className="dropdown-item" href="#">
                  {element}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
