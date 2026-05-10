import React from "react";

export default function Spinner(props) {
  const { isDark } = props;
  return (
    <div className={`d-flex justify-content-center mt-4 `}>
      <div
        className={`spinner-border ${isDark ? " text-light" : " text-dark"}`}
        role="status"
      >
        <span
          className={`visually-hidden ${isDark ? "bg-dark " : "bg-light "}`}
        ></span>
      </div>
    </div>
  );
}
