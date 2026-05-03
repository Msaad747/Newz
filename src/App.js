import "./App.css";
import { useState } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
function App() {
  
   
  const [mode, setmode] = useState("light");
  let isDark = mode === "dark";
  const toogleMode = () => {
    setmode(mode === "light" ? "dark" : "light");
    document.body.style.backgroundColor=mode==="light"?"#2e3238":"#e2dbdbd3"
  };

  return (
    <>
      <NavBar title="Newzify" isDark={isDark} toogleMode={toogleMode} />

      <News isDark={isDark} />
    </>
  );
}

export default App;
