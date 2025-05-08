import React, { Component } from 'react';

class UsedLetters extends Component {
  render() {
    return (
      <div>
        <h3>Used Letters:</h3>
        <p>{this.props.guessed.join(", ")}</p>
      </div>
    );
  }
}

export default UsedLetters;
