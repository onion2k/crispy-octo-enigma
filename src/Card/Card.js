import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './Card.css';

class Card extends Component {

  componentDidMount(){

    var el = ReactDOM.findDOMNode(this).getBoundingClientRect();
    console.log(el);

  }

  render() {
    return (
      <div className={ classNames( 'Card', { 'doublerow': this.props.doublerow }, { 'doubleheight': this.props.doubleheight } ) } style={{ backgroundImage: "url(" + this.props.image + ")" }} ></div>
    );
  }
}

export default Card;
