import PropTypes from "prop-types";

const MainBody = ({ products, handleCart }) => {
  return (
    <div className="w-7/12 p-5">
      <h1 className="text-center text-2xl font-bold">Products</h1>
      <hr className="my-5" />
      <div className="grid grid-cols-2 rounded-3xl gap-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-3xl p-3 card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="h-48 mx-auto mb-3"
                src={product.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-xl font-bold text-gray-600">
                {product.name}
              </h2>
              <h2 className="text-lg font-bold text-gray-600">
                {product.price}
              </h2>
              <h4 className="text-md text-gray-600">{product.description}</h4>
              <div className="card-actions justify-end">
                <button onClick={()=>handleCart(product)} className="btn bg-cyan-900 text-white font-bold rounded-2xl hover:text-cyan-900 hover:bg-gray-100" >Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
MainBody.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleCart: PropTypes.func,
};

export default MainBody;
