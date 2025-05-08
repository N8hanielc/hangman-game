import React, { Component } from 'react';
import LetterBox from './LetterBox';
import UsedLetters from './UsedLetters';

const WORDS = ['react', 'banana', 'hangman', 'coding', 'school'];

class Hangman extends Component {
  constructor(props) {
    super(props);
    const word = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    this.state = {
      word,
      guessed: [],
      incorrect: 0,
      maxIncorrect: 6
    };
  }

  handleGuess = (letter) => {
    this.setState(st => ({
      guessed: [...st.guessed, letter],
      incorrect: st.word.includes(letter) ? st.incorrect : st.incorrect + 1
    }));
  };

  renderWord = () => {
    return this.state.word.split("").map(ltr =>
      this.state.guessed.includes(ltr) ? ltr : "_"
    ).join(" ");
  };

  resetGame = () => {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    this.setState({ word, guessed: [], incorrect: 0 });
  };

  render() {
    const { incorrect, maxIncorrect, word, guessed } = this.state;
    const isWinner = word.split("").every(ltr => guessed.includes(ltr));
    const isLoser = incorrect >= maxIncorrect;

    return (
      <div>
        <h1>Hangman Game</h1>
        <img src={`images/${incorrect}.png`} alt={`${incorrect} incorrect guesses`} />
        <p>Wrong guesses: {incorrect}</p>
        <p>{isLoser ? word : this.renderWord()}</p>
        <LetterBox guessed={guessed} onGuess={this.handleGuess} disabled={isWinner || isLoser} />
        <UsedLetters guessed={guessed} />
        <button onClick={this.resetGame}>Restart</button>
      </div>
    );
  }
}

export default Hangman;
