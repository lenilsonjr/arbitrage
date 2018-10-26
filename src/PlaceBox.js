import React, { Component } from 'react';

class PlaceBox extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    let difference = this.props.place.average_rate_usd - this.props.userRate;
    let borderColor = (difference > 0 ) ? 'green' : 'red';
        borderColor = ( this.props.userRate == 0 ) ? 'blue' : borderColor;
    let backgroundColor = (difference > 0 ) ? 'rgba(39, 174, 96, 0.2)' : 'rgba(192, 57, 43, 0.2)';
        backgroundColor = ( this.props.userRate == 0 ) ? 'rgba(255,255,255,0.2)' : backgroundColor;
    return (
      <div className="place" style={{borderColor, backgroundColor}}>
        <b>${this.props.place.average_rate_usd}</b> in
        <br />
        { this.props.place.name }
        <br />
        {this.props.userRate > 0 && difference > 0 &&
          <small>(+${difference}) 🤑</small>
        }
        {this.props.userRate > 0 && difference <= 0 &&
          <small>No money for you here 🤷🏻‍</small>
        }
      </div>
    )
  }
}

export default PlaceBox;
