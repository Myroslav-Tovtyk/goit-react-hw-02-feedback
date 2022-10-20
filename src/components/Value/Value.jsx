import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Value.styled';
import { Span } from './Value.styled';

const Value = ({ good, neutral, bad, total, positive }) => (
  <Container>
    <Span>Good: {good}</Span>
    <Span>Neutral: {neutral}</Span>
    <Span>Bad: {bad}</Span>
    <Span>Total: {total}</Span>
    <Span>Positive Feedback: {positive} %</Span>
  </Container>
);

export default Value;
Value.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
