import React from 'react';
import PropTypes from 'prop-types';
import Styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
	const { good, neutral, bad } = options;
	return (
		<div className={Styles.feedbackSection}>
			<button
				className={Styles.feedbackButton}
				type="button"
				onClick={onLeaveFeedback}
				name="good"
				data-value={good}
			>
				Good
			</button>
			<button
				className={Styles.feedbackButton}
				type="button"
				onClick={onLeaveFeedback}
				name="neutral"
				data-value={neutral}
			>
				Neutral
			</button>
			<button
				className={Styles.feedbackButton}
				type="button"
				onClick={onLeaveFeedback}
				name="bad"
				data-value={bad}
			>
				Bad
			</button>
		</div>
	);
}

FeedbackOptions.propTypes = {
	options: PropTypes.shape({
		good: PropTypes.number.isRequired,
		neutral: PropTypes.number.isRequired,
		bad: PropTypes.number.isRequired,
	}).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};
