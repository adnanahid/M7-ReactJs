import CurrentlyCook from "./CurrentlyCook";
import WantToCock from "./WantToCock";


const MainSidebar = () => {
    return (
        <div className="w-2/5">
            <WantToCock></WantToCock>
            <CurrentlyCook></CurrentlyCook>
        </div>
    );
};

export default MainSidebar;