import WantToCock from "./WantToCock";
import PropTypes from "prop-types";

const MainSidebar = ({ wantCook }) => {
  return (
    <div className="w-2/5">
      {/* <h2 className="text-2xl w-full font-bold text-center">
        Want to cook: {wantCook.length}
      </h2> */}
      <hr className="my-3" />
      <div>
        <div>
            <WantToCock wantCook={wantCook}></WantToCock>
          {/* {wantCook.map((item, index) => (
            <WantToCock key={index} item={item}></WantToCock>
          ))} */}
        </div>
      </div>
    </div>
  );
};

MainSidebar.propTypes = {
  wantCook: PropTypes.array,
};

export default MainSidebar;
