import PropTypes from 'prop-types';


const TotalPrice = ({totalPrice}) => {
    return (
        <div className="pt-2">
            <h3>Total Price:{totalPrice}</h3>
        </div>
    );
};

TotalPrice.propTypes = {
    totalPrice: PropTypes.number.isRequired
  };

export default TotalPrice;