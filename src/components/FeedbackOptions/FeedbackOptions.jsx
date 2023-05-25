import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={css.feedbackoptions}>
      <button
        className={css.button}
        id="good"
        type="button"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={css.button}
        id="neutral"
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={css.button}
        id="bad"
        type="button"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
