import { useEffect, useState } from "react";
import "./App.css";
import AllMenu from "./Component/Allmenu";
import Header from "./Component/Header";
import MainSidebar from "./Component/Mainsidebar";

function App() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("jsonData.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  const[wantCook, setWantCook] = useState([])
  const handleWantToCook = ({menuInfo}) => {
    setWantCook(menuInfo)
  }
  console.log(wantCook);

  return (
    <>
      <Header></Header>
      <div className="flex gap-5">
        <AllMenu menus={menus} handleWantToCook={handleWantToCook}></AllMenu>
        <MainSidebar wantCook={wantCook}></MainSidebar>
      </div>
    </>
  );
}

export default App;
