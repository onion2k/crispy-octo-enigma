import React, { Component } from 'react';
import './App.css';

import Card from '../Card/Card';

class App extends Component {
  constructor(){
    super();
    var images = [
      'https://source.unsplash.com/1600x900/daily?nature',
      'https://source.unsplash.com/1600x900/daily?technology',
      'https://source.unsplash.com/1600x900/daily?coffee',
      'https://source.unsplash.com/1600x900/daily?love',
      'https://source.unsplash.com/1600x900/daily?team',
      'https://source.unsplash.com/1600x900/daily?clothing',
      'https://source.unsplash.com/1600x900/daily?mountains',
      'https://source.unsplash.com/1600x900/daily?city',
      'https://source.unsplash.com/1600x900/daily?people',
      'https://source.unsplash.com/1600x900/daily?web',
      'https://source.unsplash.com/1600x900/daily?water',
      'https://source.unsplash.com/1600x900/daily?night',
      'https://source.unsplash.com/1600x900/daily?food',
      'https://source.unsplash.com/1600x900/daily?music',
      'https://source.unsplash.com/1600x900/daily?office',
      'https://source.unsplash.com/1600x900/daily?landscape',
      'https://source.unsplash.com/1600x900/daily?rain',
      'https://source.unsplash.com/1600x900/daily?autumn',
      'https://source.unsplash.com/1600x900/daily?flowers',
      'https://source.unsplash.com/1600x900/daily?road',
      'https://source.unsplash.com/1600x900/daily?tree',
      'https://source.unsplash.com/1600x900/daily?nasa'
    ];
    let tiles = this.resolveTileConstraints(images, 4, 5, 2, 2);
    this.state = { overrideUrl: null, tiles: tiles };
  }
  resolveTileConstraints(images, sizew, sizeh, maxw, maxh) {

    let tiles = [];

    for (let t = 0; t < sizew*sizeh; t++) {
        tiles[t] = { row: false, column: false, image: images[t]};
    }

    return tiles;

    // return [
    //   {row: false, column: false}, 
    //   {row: false, column: false}, 
    //   {row: false, column: false}, 
    //   {row: false, column: false}, 
    //   {row: true, column: false}, 
    //   {row: false, column: false}, 
    //   {row: true, column: true}, 
    //   {row: false, column: false}, 
    //   {row: true, column: false}, 
    //   {row: false, column: false}, 
    //   {row: true, column: false}, 
    //   {row: false, column: false}, 
    //   {row: false, column: false}, 
    //   {row: false, column: false}      
    // ];
  }
  render() {

    var tiles = this.state.tiles;

    var board = tiles.map((tile)=>{
      return (
        <Card doublerow={tile.row} doubleheight={tile.column} image={ tile.image } override={ this.state.overrideUrl } onMouseEnter={ (e)=>{ this.setState({ overrideUrl: tile.image }); } } onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } } key={ tile.image }></Card>
      );
    })

    return (
      <div className="App">
        { board }
      </div>
    );
  }
}

export default App;
