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
          name: 'San Francisco, US 🇺🇸',
          average_rate_usd: 105
        },
        {
          name: 'New York, US 🇺🇸',
          average_rate_usd: 90
        },
        {
          name: 'São Paulo, BR 🇧🇷',
          average_rate_usd: 17
        },
        {
          name: 'London, EN 🏴󠁧󠁢󠁥󠁮󠁧󠁿',
          average_rate_usd: 70
        },
        {
          name: 'Paris, FR 🇫🇷',
          average_rate_usd: 35
        },
        {
          name: 'Bangalore, IN 🇮🇳',
          average_rate_usd: 18
        },
        {
          name: 'Hong Kong, HK 🇭🇰',
          average_rate_usd: 80
        },
        {
          name: 'Nairobi, KE 🇰🇪',
          average_rate_usd: 5
        },
        {
          name: 'Johannesburg, SA 🇿🇦',
          average_rate_usd: 15
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
