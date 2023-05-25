import { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    if (evt.target.id === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    }
    if (evt.target.id === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    }
    if (evt.target.id === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (!total) {
      return '0';
    }
    return ((good * 100) / total).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please, leave your feedback">
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    );
  }
}
