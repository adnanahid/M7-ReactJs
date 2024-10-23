import PropTypes from "prop-types";
const SideBar = ({ handleToggle, toggle }) => {
  return (
    <div className="w-5/12 p-5">
      <h1 className="text-center text-2xl font-bold">SideBar</h1>
      <hr className="my-5" />
      <div className="flex justify-around">
        <button
          onClick={() => handleToggle(true)}
          className={`${
            toggle.cart === true
              ? "bg-cyan-900 btn text-white font-bold w-24 rounded-2xl text-lg"
              : "btn text-black font-bold w-24 rounded-2xl text-lg"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => handleToggle(false)}
          className={`${
            toggle.cart === true
              ? "btn text-black font-bold w-24 rounded-2xl text-lg"
              : "bg-cyan-900 btn text-white font-bold w-24 rounded-2xl text-lg"
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
  handleToggle: PropTypes.func,
  toggle: PropTypes.bool,
};
export default SideBar;