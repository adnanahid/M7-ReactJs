const btn = () => {
  const getProduct = document.getElementById("product");
  const getQuantity = document.getElementById("quantity");
  const getProductValue = getProduct.value;
  const getQuantityValue = getQuantity.value;
  getProduct.value = " ";
  getQuantity.value = " ";
  console.log(getProductValue, getQuantityValue);
  display(getProductValue, getQuantityValue);

  saveProductToLocalStorage(getProductValue, getQuantityValue)
};

const display = (getProductValue, getQuantityValue) => {
  const liContainer = document.getElementById("ul");
  const li = document.createElement("li");
  li.innerText = `product:${getProductValue} quantity:${getQuantityValue}`;
  liContainer.appendChild(li);
};
const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) =>{
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  console.log(cart);
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified)
}
