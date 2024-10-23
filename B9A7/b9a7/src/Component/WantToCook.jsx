import PropTypes from "prop-types";

const WantToCook = ({ item }) => {
  return (
    <div className="grid grid-cols-4 space-x-4 pb-3 text-lg">
      <span>{item.recipe_name}</span>
      <span>{item.preparing_time}</span>
      <span>{item.calories}</span>
      <button className="btn btn-error">Preparing</button>
    </div>
  );
};

WantToCook.propTypes = {
  item: PropTypes.shape({
    recipe_name: PropTypes.string.isRequired,
    preparing_time: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};

export default WantToCook;
