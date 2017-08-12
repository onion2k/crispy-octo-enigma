import React, { Component } from 'react';
import classNames from 'classnames';
import './Card.css';

class Card extends Component {
  render() {

    return (
      <div className={ classNames( 'Card', { 'double': this.props.double } ) }>
        Wibble
      </div>
    );
  }
}

export default Card;
