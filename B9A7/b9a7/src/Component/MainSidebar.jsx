import PropTypes from "prop-types";

const MainSidebar = ({ wantCook }) => {
  return (
    <div className="w-2/5 border border-gray-200 rounded-xl p-5">
      <h2 className="text-2xl w-full font-bold text-center">
        Want to cook: {wantCook.length}
      </h2>
      <hr className="my-3" />
      <div>
        <div>
          {wantCook.map((item, index) => (
            // <WantToCook key={index} item={item}></WantToCook>
            <div
              key={index}
              className="grid grid-cols-4 space-x-4 pb-3 text-lg"
            >
              <span>{item.recipe_name}</span>
              <span>{item.preparing_time}</span>
              <span>{item.calories}</span>
              <button className="btn btn-error">Preparing</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

MainSidebar.propTypes = {
  wantCook: PropTypes.array,
};

export default MainSidebar;
