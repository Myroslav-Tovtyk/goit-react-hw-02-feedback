import React, { Component } from 'react';
import Controls from './FeedbackControls/FeedbackControls';
import Section from './Statistics/Statistics';
import Value from './Value/Value';
import Notification from './Notification/Notification';
import { Container } from '../components/Global.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Controls
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleOptions}
        />

        <Section title="Statistics:">
          {this.countTotalFeedback() ? (
            <Value
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedbacks yet:(" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
