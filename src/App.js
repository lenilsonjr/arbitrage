import React, { Component } from 'react';
import './App.css';
import PlaceBox from './PlaceBox';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rate: 0,
      rate_currency: 'USD',
      places: [
        {
          name: 'Silicon Valley 🇺🇸',
          average_rate_usd: 105
        },
        {
          name: 'United States 🇺🇸',
          average_rate_usd: 47
        },
        {
          name: 'Australia 🇦🇺',
          average_rate_usd: 39
        },
        {
          name: 'United Kingdom 🇬🇧',
          average_rate_usd: 32
        },
        {
          name: 'Germany 🇩🇪',
          average_rate_usd: 29
        },
        {
          name: 'France 🇫🇷󠁧󠁢󠁥󠁮󠁧󠁿',
          average_rate_usd: 24
        },
        {
          name: 'South Korea 🇰🇷',
          average_rate_usd: 22
        },
        {
          name: 'South Africa 🇿🇦',
          average_rate_usd: 21
        },
        {
          name: 'China 🇨🇳',
          average_rate_usd: 15
        },
        {
          name: 'Brazil 🇧🇷',
          average_rate_usd: 10
        },
        {
          name: 'Kenya 🇰🇪',
          average_rate_usd: 8
        },
        {
          name: 'India 🇮🇳',
          average_rate_usd: 6
        },
      ]
    }

  }

  render() {
    return (
      <div className="app">
        <header className="app-header">

          <div className="info-header">
            <div className="rate-wrapper">
              <h3>💰 What's your hourly rate?</h3>
              <input type="number" placeholder="30" min="1" onChange={(e) => this.setState({rate: e.target.value})} />
              <span>
                <select disabled defaultValue='USD'>
                  <option value='USD'>USD</option>
                  <option value='EUR'>EUR</option>
                  <option value='GBP'>GBP</option>
                  <option value='BRL'>BRL</option>
                </select>
              </span>
              <h3>💸 you could be making...</h3>
            </div>

            <div className="info-text">
              <h4>📊 Arbitrage is the key</h4>
              <p>For those in tech working remotely, the calc is simple: <a href="https://lenilson.me" target="_blank">Make money where prices are high, spend it where prices are low.</a></p>
            </div>
          </div>

          <div className="arbitrage">
            {this.state.places.map((place, i) => {
              return <PlaceBox place={place} userRate={this.state.rate} key={i} />;
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
