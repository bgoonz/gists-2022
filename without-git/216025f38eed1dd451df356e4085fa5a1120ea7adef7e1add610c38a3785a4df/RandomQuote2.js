import React from "react";
class RandomQuote extends React.Component {
  constructor() {
    super();
    const quotes = [
      "May the Force be with you.",
      "There's no place like home.",
      "I'm the king of the world!",
      "My mama always said life was like a box of chocolates.",
      "I'll be back.",
    ];
    this.state = {
      quotes,
      currentQuoteIndex: this.getRandomInt(quotes.length);
    }
  }
  changeQuote = () => {
    const newIndex = this.getRandomInt(this.state.quotes.length);
    // Setting the 'new state' of currentQuoteIndex state property
    // to newly generated random index #.
    this.setState({
      currentQuoteIndex: newIndex;
    })
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  render() {
    return (
      <div>
        <h2>Random Quote</h2>
        <p>{this.state.quotes[this.state.currentQuoteIndex]}</p>
        <button type="button" onClick={this.changeQuote}>
          Change Quote
        </button>
      </div>
    )
  }
}
export default RandomQuote;