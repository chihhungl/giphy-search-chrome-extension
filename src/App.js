import React from 'react';
import  { searchGiphy } from './api';

function constructGifMediaUrl(imageObject) {
  return imageObject.images.fixed_width.url;
}

function renderGif(url) {
  return (
    <p>
      <img alt='' src={url} />
    </p>
  );
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
function shuffleArray (array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      prevInputValue: null,
      inputValue: '',
      results: [],
      index: 0,
    }
  }

  onInputChange = (ev) => {
    this.setState({ inputValue: ev.target.value });
  }

  onKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      ev.stopPropagation();
      this.onSearchButtonClick();
    }
  }

  onSearchButtonClick = async () => {
    const { prevInputValue, inputValue, index } = this.state;

    if (prevInputValue && prevInputValue === inputValue) {
      this.setState({ index: (index + 5) % 50 });
      return;
    }

    const results = await searchGiphy(inputValue);
    const imageUrls =
      shuffleArray(results.data.map(imageObject => constructGifMediaUrl(imageObject)));

    this.setState({ index: 0, prevInputValue: inputValue, results: imageUrls });
  }

  renderGifs = () => {
    const { index, results } = this.state;

    return (
      <>
        {results.slice(index, index + 5).map(url => renderGif(url))}
      </>
    );
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p><strong>Search Giphy</strong></p>
        </header>
        <p>
          <input
            placeholder="search..."
            value={inputValue}
            onChange={this.onInputChange}
            onKeyDown={this.onKeyDown}
          >
          </input>
          <button
            className="submit-button"
            onClick={this.onSearchButtonClick}
          >
            Go
          </button>
        </p>
        {this.renderGifs()}
      </div>
    );
  }
}
