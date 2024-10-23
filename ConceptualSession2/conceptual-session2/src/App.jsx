import { useState } from "react";
import Banner from "./Banner";
import MainBody from "./MainBody";
import SideBar from "./SideBar";

const App = () => {
  const [toggle, setToggle] = useState({
    cart: 'true',
  });

  const handleToggle = (cart) => {
    if (cart === 'true') {
      setToggle({
        cart: 'true',
      });
    } else {
      setToggle({
        cart: 'false',
      });
    }
  };
  console.log(toggle);

  return (
    <div>
      <Banner></Banner>
      <div className="flex justify-between">
        <MainBody></MainBody>
        <SideBar handleToggle={handleToggle} toggle={toggle}></SideBar>
      </div>
    </div>
  );
};

export default App;
