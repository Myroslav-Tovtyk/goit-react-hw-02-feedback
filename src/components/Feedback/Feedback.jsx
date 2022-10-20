import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../FeedbackControls/FeedbackControls';
import Value from '../Value/Value';
import Section from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class Feedback extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  static propTypes = {
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleOptions = feedback => {
    this.setState(prev => {
      return {
        [feedback]: prev[feedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const Total = this.state.good + this.state.neutral + this.state.bad;
    return Total;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return;
    } else {
      const percentPositive = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );

      return percentPositive;
    }
  };
  render() {
    return (
      <div className="Counter">
        <Controls
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleOptions}
        />

        <Section title="Statistics:">
          {this.countTotalFeedback() ? (
            <Value
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedbacks yet:(" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
