/**
 * Spinner Component - Loading Indicator
 * 
 * Displays a centered loading spinner while data is being fetched
 * Adapts appearance based on theme (dark/light mode)
 */

import React from "react";

/**
 * Spinner Component - Loading Indicator
 * @param {Object} props - Contains isDark flag for theme styling
 * @returns {JSX.Element} Bootstrap spinner component
 */
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
