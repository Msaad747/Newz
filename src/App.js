import "./App.css";
import { useState } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
function App() {
  const [mode, setmode] = useState("light");
  const [category, setcategory] = useState({
    cate:"General",
    query:"everything",
  });
  const [rdmKeyGen,setrdmKeyGen] =useState(Math.random())
  const apikey=process.env.REACT_APP_NEWS_API;
  const isDark = mode === "dark";
  document.body.style.backgroundColor =
    mode === "light" ? "#e2dbdbd3" : "#2e3238";
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
        
      />

      <News key={rdmKeyGen} isDark={isDark} category={category} apikey={apikey} />
    </>
  );
}

export default App;
