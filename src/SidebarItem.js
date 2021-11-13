import React from "react";

export default function SidebarItem({ name, active, handleChange }) {
  return (
    <button
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={handleChange}
    >
      {name}{" "}
    </button>
  );
}
