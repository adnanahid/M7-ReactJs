import PropTypes from 'prop-types'

const WantToCock = ({wantCook}) => {
    return (
        <div>
            <h3>itemName: {wantCook.recipe_name}</h3>
        </div>
    );
};

WantToCock.propTypes ={
    wantCook: PropTypes.string
}

export default WantToCock;