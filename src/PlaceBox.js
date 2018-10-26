import React, { Component } from 'react';

class PlaceBox extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    let difference = this.props.place.average_rate_usd - this.props.userRate;
    let borderColor = (difference > 0 ) ? 'green' : 'red';
        borderColor = ( this.props.userRate == 0 ) ? 'blue' : borderColor;
    return (
      <div className="place" style={{borderColor}}>
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
