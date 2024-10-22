import { useEffect, useState } from "react";
import "./App.css";
import Allmenu from "./Component/Allmenu";
import Header from "./Component/Header";

function App() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("jsonData.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return (
    <>
      <Header></Header>
      <div className="flex items-center gap-5">
        <Allmenu menus={menus}></Allmenu>
      </div>
    </>
  );
}

export default App;
