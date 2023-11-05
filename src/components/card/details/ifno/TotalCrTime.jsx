import PropTypes from 'prop-types';

const TotalCrTime = ({totalCrTime}) => {
    return (
        <div className="py-2">
            <h3>Total Credit Hour: {totalCrTime}</h3>
        </div>
    );
};

TotalCrTime.propTypes = {
    totalCrTime: PropTypes.number.isRequired
  };
export default TotalCrTime;