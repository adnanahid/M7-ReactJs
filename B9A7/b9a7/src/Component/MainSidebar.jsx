import PropTypes from "prop-types";

const MainSidebar = ({ wantCook, handleRemove, order }) => {
  return (
    <div className="w-5/12 border border-gray-200 rounded-xl p-1">
      <h2 className="text-2xl w-full font-bold text-center py-3">
        Want to cook: {wantCook.length}
      </h2>
      <hr className="mb-3" />
      <div className="pb-5">
        <div>
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
                {wantCook.map((item, index) => (
                  // <WantToCook key={index} item={item}></WantToCook>
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                    <td>
                      <button
                        className="btn btn-error text-white font-bold rounded-xl"
                        onClick={() => handleRemove(item.recipe_id)}
                      >
                        Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
    </div>
  );
};

MainSidebar.propTypes = {
  wantCook: PropTypes.array,
  order: PropTypes.array,
  handleRemove: PropTypes.array,
};

export default MainSidebar;
