import Banner from './Banner';
import { useState } from "react";
import MainBody from "./MainBody";
import SideBar from "./SideBar";

const App = () => {
  const [toggle, setToggle] = useState({
    cart: true,
  });
  const handleToggle = (cart) => {
    setToggle({ cart: cart === true });
  };
  return (
    <div>
      <Banner />
      <div className="flex justify-between">
        <MainBody />
        <SideBar handleToggle={handleToggle} toggle={toggle}/>
      </div>
    </div>
  );
};

export default App;
