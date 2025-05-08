import React, { Component } from 'react';

class LetterBox extends Component {
  render() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return (
      <div>
        {alphabet.map(ltr => (
          <button
            key={ltr}
            onClick={() => this.props.onGuess(ltr)}
            disabled={this.props.guessed.includes(ltr) || this.props.disabled}
          >
            {ltr}
          </button>
        ))}
      </div>
    );
  }
}

export default LetterBox;
