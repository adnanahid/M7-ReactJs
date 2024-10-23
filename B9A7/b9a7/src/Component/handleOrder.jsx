import PropTypes from "prop-types";

const handleOrder = ({ order }) => {
  return (
    <div>
      <h2 className="text-2xl w-full font-bold text-center py-5">
        Currently Cooking
      </h2>
      <hr className="mb-3" />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Name</th>
              <th className="text-center">Time</th> 
              <th className="text-center">Calories</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => (
              // <WantToCook key={index} item={item}></WantToCook>
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time}</td>
                <td>{item.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

handleOrder.propTypes = {
  order: PropTypes.array,
};

export default handleOrder;
