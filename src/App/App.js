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
    let tiles = this.resolveTileConstraints(images, 4, 4, 2, 2);
    this.state = { overrideUrl: null, tiles: tiles };
  }

  resolveTileConstraints(images, sizew, sizeh, maxw, maxh) {

    let tiles = [];

    for (let t = 0; t < (sizew*sizeh); t++) {

      //tiles[t] = { row: false, column: false, image: images[t] };

    }

    var complete = false;
    var tile = 0;
    var row = 0;
    var nrow = 0;
    var col = 0;
    
    while (complete === false) {

      var w = Math.floor(Math.random() * 3) + 1;
      var h = Math.floor(Math.random() * 3) + 1;

      if (w < 3) { w = 1 } else { w = 2; }
      if (h < 3) { h = 1 } else { h = 2; }

      if (row > 2) { w = 1; }

      tiles[tile] = { row: false, column: false, image: images[tile] };
      
      if (w===2) {
        tiles[tile].column = true;
      }

      if (h===2) {
        tiles[tile].row = true;
        nrow += w;
      }

      row += w;
      if (row > 3) { row = nrow; col++; nrow = 0; }

      tile++;

      if (col > 3) { complete = true; }

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
