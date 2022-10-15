// import PropTypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedBackContex'


export default function FeedBackStats() {
  const { feedBack } = useContext(FeedbackContext);

  let average =
    feedBack.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedBack.length;
    average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>{feedBack.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
// FeedBackStats.propTypes = {feedBack: PropTypes.array.isRequired}