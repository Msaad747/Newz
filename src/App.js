import "./App.css";
import { useState } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
function App() {
  const [mode, setmode] = useState("light");
  const [category, setcategory] = useState("General");
  let isDark = mode === "dark";
  // document.body.style.backgroundColor =
  //   mode === "light" ? "#2e3238" : "#e2dbdbd3";
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
      />

      <News key={category} isDark={isDark} category={category} />
    </>
  );
}

export default App;
