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

  const[cart, setCart] = useState([])
  const handleCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  };

  return (
    <div>
      <Banner />
      <div className="flex justify-between">
        <MainBody handleCart={handleCart} products={products} />
        <SideBar cart={cart} handleToggle={handleToggle} toggle={toggle} />
      </div>
    </div>
  );
};

export default App;
