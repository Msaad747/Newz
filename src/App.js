/**
 * App Component - Main entry point for the News App
 * 
 * This component serves as the root of the application and handles:
 * - Theme mode (light/dark) management
 * - News category selection and filtering
 * - URL parameter parsing for dynamic routing
 * - Navigation between main pages (Home, About, Privacy Policy)
 * 
 * Features:
 * - Dynamic theme switching
 * - URL-based category filtering (?category=sports, ?q=search)
 * - Syncs category changes with browser URL
 */

import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import About from "./Component/About";
import PrivacyPolicy from "./Component/privacyPolicy";

/**
 * Main App Component
 * @returns {JSX.Element} The main application layout with routing
 */
function App() {

  const [mode, setmode] = useState("light");
  const [rdmKeyGen, setrdmKeyGen] = useState("General");
  const [category, setcategory] = useState({
    cate: "General",
    query: "everything",
  });
  const [showEmpty, setShowEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams] = useSearchParams();

  /**
   * Effect Hook - Reads URL parameters and updates category
   * Listens for changes in search parameters and updates the news category accordingly
   * Supports: ?category=sports, ?category=everything&q=search_term
   * Valid parameters: 'category' and 'q' only
   * Shows empty page if: invalid parameters, category other than "everything" with q, or unexpected params
   */
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const queryParam = searchParams.get("q");

    // Get all parameter keys from URL
    const allParams = Array.from(searchParams.keys());
    
    // Check for invalid/unexpected parameters (only 'category' and 'q' are allowed)
    const validParams = ["category", "q"];
    const hasInvalidParams = allParams.some(param => !validParams.includes(param));
    
    // If there are unexpected parameters, show error page
    if (hasInvalidParams) {
      setShowEmpty(true);
      setErrorMessage("Invalid URL parameters. Please use correct URL format.");
      return;
    }

    // Invalid case: category set (not "everything") with query parameter - show empty page
    if (categoryParam && categoryParam.toLowerCase() !== "everything" && queryParam) {
      setShowEmpty(true);
      setErrorMessage("Invalid search parameters. Please search using the 'Everything' category.");
      return;
    }

    setShowEmpty(false);
    setErrorMessage("");

    if (categoryParam === "everything" && queryParam) {
      const formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      setcategory({
        cate: formattedCategory,
        query: queryParam ,
      });
      setrdmKeyGen(Math.random());
    } else if (queryParam) {
      setcategory({
        cate: "Everything",
        query: queryParam,
      });
      setrdmKeyGen(queryParam);
    }
    else if (categoryParam) {
      const formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      setcategory({
        cate: formattedCategory,
        query: "",
      });
      setrdmKeyGen(Math.random());
    }
  }, [searchParams]);

  const apikey = process.env.REACT_APP_NEWS_API;
  const isDark = mode === "dark";
  document.body.style.backgroundColor =
    mode === "light" ? "#e2dbdbd3" : "#2e3238";
  /**
   * Toggles between light and dark theme modes
   * Updates both state and document background color
   */
  const toogleMode = () => {
    setmode(mode === "light" ? "dark" : "light");
    document.body.style.backgroundColor =
      mode === "light" ? "#2e3238" : "#e2dbdbd3";
  };

  return (
    <>
      <NavBar
        title="Newzify"
        isDark={isDark}
        toogleMode={toogleMode}
        setCate={setcategory}
        keyGen={setrdmKeyGen}
        showEmpty={showEmpty}
      />
      <Routes>
        <Route
          path="/"
          element={
            <News
              key={rdmKeyGen}
              isDark={isDark}
              category={category}
              apikey={apikey}
              showEmpty={showEmpty}
              errorMessage={errorMessage}
            />
          }
        />
        <Route path="/about" element={<About isDark={isDark} />} />
        <Route
          path="/privacy_policy"
          element={<PrivacyPolicy isDark={isDark} />}
        />
      </Routes>
    </>
  );
}

export default App;
