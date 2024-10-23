import PropTypes from "prop-types";

const Menu = ({ menuInfo, handleWantToCook }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5">
      <img
        className="rounded-xl pb-5 h-[200px] w-full object-cover"
        src={menuInfo.recipe_image}
      />
      <h2 className="text-start text-xl font-bold pb-2 ">
        {menuInfo.recipe_name}
      </h2>
      <p className="text-start  text-gray-600 pb-3">
        {menuInfo.short_description}
      </p>
      <hr />
      <h2 className="text-xl font-semibold text-start py-3">
        Ingredients: {menuInfo.ingredients.length}
      </h2>
      <ul className="pb-5 text-gray-600 ml-8">
        {menuInfo.ingredients.map((ingredient, index) => (
          <li key={index} className="list-disc text-start pb-1">
            {ingredient}
          </li>
        ))}
      </ul>
      <hr />
      <div className="flex justify-between py-5 text-gray-600">
        <span>
          <i className="fa-solid fa-stopwatch"></i> {menuInfo.preparing_time}
        </span>
        <span>
          <i className="fa-brands fa-gripfire"></i> {menuInfo.calories}
        </span>
      </div>
      <button onClick={()=>handleWantToCook(menuInfo)} className="btn btn-error text-white font-bold rounded-3xl">
        Want to cook
      </button>
    </div>
  );
};

Menu.propTypes = {
    menuInfo: PropTypes.shape({
    recipe_image: PropTypes.string.isRequired, // expects a URL (string)
    recipe_name: PropTypes.string.isRequired, // expects a string
    short_description: PropTypes.string.isRequired, // expects a short text
    preparing_time: PropTypes.string.isRequired, // expects a string for time (e.g., "30 mins")
    calories: PropTypes.string.isRequired, // expects a string (e.g., "200 kcal")
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, // expects an array of strings
  }).isRequired,
  handleWantToCook: PropTypes.function,
};

export default Menu;
