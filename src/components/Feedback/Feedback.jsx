import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  incrementNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  incrementBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <p>Plese, leave feedback</p>
        <div>
          <button type="button" onClick={this.incrementGood}>
            Good
          </button>
          <button type="button" onClick={this.incrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.incrementBad}>
            Bad
          </button>
        </div>
        <div>
          <p>Good:{good}</p>
          <p>Nautral:{neutral}</p>
          <p>Bad:{bad}</p>
        </div>
      </section>
    );
  }
}

export default Feedback;
