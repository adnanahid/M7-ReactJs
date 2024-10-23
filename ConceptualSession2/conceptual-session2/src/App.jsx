import { useState } from "react";
import Banner from "./Banner";
import MainBody from "./MainBody";
import SideBar from "./SideBar";

const App = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
  });

  const handleIsActive = (cart) => {
    if (cart === true) {
      setIsActive({
        cart: true,
      });
    } else {
      setIsActive({
        cart: false,
      });
    }
  };

  return (
    <div>
      <Banner></Banner>
      <div className="flex justify-between">
        <MainBody></MainBody>
        <SideBar handleIsActive={handleIsActive} isActive={isActive}></SideBar>
      </div>
    </div>
  );
};

export default App;
