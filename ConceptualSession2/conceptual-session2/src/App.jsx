import Banner from "./Banner";
import { useEffect, useState } from "react";
import MainBody from "./MainBody";
import SideBar from "./SideBar";

const App = () => {
  const [toggle, setToggle] = useState({
    cart: true,
  });
  const handleToggle = (cart) => {
    setToggle({ cart: cart === true });
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Banner />
      <div className="flex justify-between">
        <MainBody products={products} />
        <SideBar handleToggle={handleToggle} toggle={toggle} />
      </div>
    </div>
  );
};

export default App;
