import React from 'react';
import PropTypes from 'prop-types';
import { Button, Li, Ul } from './FeednackControls.styled';

const Controls = ({ options, onLeaveFeedback }) => {
  return (
    <Ul>
      {options.map((option, index) => {
        return (
          <Li key={index}>
            <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </Li>
        );
      })}
    </Ul>
  );
};

export default Controls;

Controls.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
