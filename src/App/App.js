import React, { Component } from 'react';
import './App.css';

import Card from '../Card/Card';

class App extends Component {
  constructor(){
    super();
    this.state = { overrideUrl: null };
  }
  render() {
    var images = [
      'https://source.unsplash.com/1600x1200/?nature',
      'https://source.unsplash.com/1600x1200/?technology',
      'https://source.unsplash.com/1600x1200/?web',
      'https://source.unsplash.com/1600x1200/?water',
      'https://source.unsplash.com/1600x1200/?night',
      'https://source.unsplash.com/1600x1200/?food',
      'https://source.unsplash.com/1600x1200/?music',
      'https://source.unsplash.com/1600x1200/?office',
      'https://source.unsplash.com/1600x1200/?landscape',
      'https://source.unsplash.com/1600x1200/?rain',
      'https://source.unsplash.com/1600x1200/?autumn',
      'https://source.unsplash.com/1600x1200/?flowers',
      'https://source.unsplash.com/1600x1200/?road',
      'https://source.unsplash.com/1600x1200/?tree',
      'https://source.unsplash.com/1600x1200/?nasas'
    ];
    return (
      <div className="App">
        <Card image={ images[0] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[0] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card image={ images[1] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[1] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card image={ images[2] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[2] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card image={ images[3] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[3] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card doublerow image={ images[4] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[4] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card image={ images[5] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[5] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card doublerow doubleheight image={ images[6] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[6] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card image={ images[7] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[7] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card doublerow image={ images[8] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[8] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card image={ images[9] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[9] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card doublerow image={ images[10] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[10] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card image={ images[11] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[11] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card image={ images[12] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[12] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>
        <Card image={ images[13] } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: images[13] }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } }></Card>

      </div>
    );
  }
}

export default App;
