import PropTypes from "prop-types";

const SideBar = ({ handleToggle, toggle }) => {
  return (
    <div className="w-5/12 p-5">
      <h1 className="text-center text-2xl font-bold">SideBar</h1>
      <hr className="my-5" />
      <div className="flex justify-around">
        <button
          onClick={() => handleToggle('true')}
          className={`${
            toggle === 'true'
              ? "bg-cyan-900 btn rounded-xl text-white w-32 font-bold text-xl"
              : "btn rounded-xl text-white w-32 font-bold text-xl"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => handleToggle('false')}
          className={`${
            toggle === 'true'
              ? "bg-cyan-900 btn rounded-xl text-white w-32 font-bold text-xl"
              : "btn rounded-xl text-white w-32 font-bold text-xl"
          }`}
        >
          About
        </button>
      </div>
      <hr className="my-5" />
    </div>
  );
};

SideBar.propTypes = {
  handleToggle: PropTypes.func, // Correct type for function
  toggle: PropTypes.bool,       // Correct type for boolean
};

export default SideBar;
