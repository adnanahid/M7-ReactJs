import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <th className="text-lg font-bold">{index + 1}</th>
                <td className="text-lg font-bold">{item.name}</td>
                <td className="text-lg font-bold">{item.price}</td>
                <td>
                  <button className="bg-cyan-900 btn text-white rounded-lg text-sm hover:bg-gray-100">
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
