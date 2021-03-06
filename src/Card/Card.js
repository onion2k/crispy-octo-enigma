import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './Card.css';

class Card extends Component {

  constructor(props) {

    super();
    this.image = props.image;
    this.inlineStyle = { backgroundImage: "url(" + this.image + ")", backgroundPosition: "0px 0px" };
    
  }

  componentDidMount(){

    var el = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.inlineStyle['backgroundPosition'] = (-1*el.left)+"px "+(-1*el.top)+"px";
    this.forceUpdate();

  }

  componentWillReceiveProps(nextProps) {
    
    this.inlineStyle['backgroundImage'] = (nextProps.override) ? "url(" + nextProps.override + ")" : "url(" + this.image + ")";
    this.forceUpdate();

  }

  render() {
    var clone = Object.assign({}, this.inlineStyle);
    return (
      <div 
        className={ classNames( 'Card', { 'doublerow': this.props.doublerow }, { 'doubleheight': this.props.doubleheight } ) } 
        style={ clone }
        onMouseEnter={ this.props.onMouseEnter }
        onMouseLeave={ this.props.onMouseLeave }
        ></div>
    );
  }
}

export default Card;
