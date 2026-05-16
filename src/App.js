import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import About from "./Component/About";
import PrivacyPolicy from "./Component/privacyPolicy";
function App() {
  // const [tabs, setTabs] = useState({
  //   home: true,
  //   about: false,
  //   privacy: false,
  // });
  const [mode, setmode] = useState("light");
  const [rdmKeyGen, setrdmKeyGen] = useState("General");
  const [category, setcategory] = useState({
    cate: "General",
    query: "everything",
  });
  const apikey = process.env.REACT_APP_NEWS_API;
  const isDark = mode === "dark";
  document.body.style.backgroundColor =
    mode === "light" ? "#e2dbdbd3" : "#2e3238";
  const toogleMode = () => {
    setmode(mode === "light" ? "dark" : "light");
    document.body.style.backgroundColor =
      mode === "light" ? "#2e3238" : "#e2dbdbd3";
  };
  // const switchtabs = (tabName) => {
  //   if (tabName === "Newzify") {
  //     setTabs({ home: true, about: false, privacy: false });
  //   } else if (tabName === "AboutUs") {
  //     setTabs({ home: false, about: true, privacy: false });
  //   } else if (tabName === "Privacy Policy") {
  //     setTabs({ home: false, about: false, privacy: true });
  //   } else {
  //     setTabs({ home: true, about: false, privacy: false });
  //   }
  // };

  return (
    <>
      <NavBar
        title="Newzify"
        isDark={isDark}
        toogleMode={toogleMode}
        setCate={setcategory}
        keyGen={setrdmKeyGen}
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
            />
          }
        />
        <Route
          path="/home"
          element={
            <News
              key={rdmKeyGen}
              isDark={isDark}
              category={category}
              apikey={apikey}
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
