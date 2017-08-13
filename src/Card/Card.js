import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './Card.css';

class Card extends Component {

  constructor(props) {

    super();
    this.image = props.image;
    this.inlineStyle = { backgroundImage: "url(" + this.image + ")" };
    this.state = { t:0, l:0 };

  }

  componentDidMount(){

    var el = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.inlineStyle['backgroundPosition'] = (-1*el.left)+"px "+(-1*el.top)+"px";
    this.setState({ l: el.left, t: el.top});

  }

  componentWillReceiveProps(nextProps) {
    this.inlineStyle['backgroundImage'] = (nextProps.override) ? "url(" + nextProps.override + ")" : "url(" + this.image + ")";
    this.forceUpdate();
  }

  render() {
    return (
      <div 
        className={ classNames( 'Card', { 'doublerow': this.props.doublerow }, { 'doubleheight': this.props.doubleheight } ) } 
        style={ this.inlineStyle }
        onMouseEnter={ this.props.onMouseEnter }
        onMouseLeave={ this.props.onMouseLeave }
        ></div>
    );
  }
}

export default Card;
