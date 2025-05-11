import "./Hangman.css";

import React, { Component } from "react";

const images = [
  "/images/stage0.jpg",
  "/images/stage1.jpg",
  "/images/stage2.jpg",
  "/images/stage3.jpg",
  "/images/stage4.jpg",
  "/images/stage5.jpg",
  "/images/stage6.jpg",
];

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: "react"
    };
  }

  render() {
    const { nWrong } = this.state;
    return (
      <div className="Hangman">
        <img src={images[nWrong]} alt={`${nWrong} wrong guesses`} />
        {/* Your existing UI below this */}
      </div>
    );
  }
}

export default Hangman;
