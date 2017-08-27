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
    let total = 0;

    for (let tile = 0; tile < (sizew*sizeh); tile++) {
      tiles[tile] = { row: false, column: false, image: images[tile] };
    }

    for (let tile = 0; tile < (sizew*sizeh); tile++) {

      if (tiles[tile]===null) { continue; }

      total++;
      
      var t = Math.floor(Math.random()*3);
      
      switch (t) {
        case 0: //1x1
          break;
        case 1: //1x2
          if (tile > sizew) {
            if (tiles[tile-sizew] !== null && tiles[tile-sizew].column!==true) {
              continue;
            }  
          }
          if (tiles[tile+1]===null) {
            continue;
          }
          if ((tile+1)%4!==0) {
            tiles[tile].column = true;
            tiles[tile+1] =  null;            
          }
          total++;
          break;
        case 2: //2x1
          if (total > ((sizew-1)*sizeh)) {
            continue;
          }
          if ((tile+1)%4!==0) {
            tiles[tile].row = true;
            tiles[tile+sizew] =  null;            
          }
          total++;
          break;
        case 3: //2x2
          break;
        default:
          break;
      }

    }
      

    // tiles[5].row = true;
    // tiles[5].column = true;
    // tiles[6] = null;
    // tiles[9] = null;
    // tiles[10] = null;
    
    return tiles;

  }
  render() {

    var tiles = this.state.tiles;

    var board = tiles.map((tile)=>{
      if (tile === null) { return null; }
      return (
        <Card 
          key={ tile.image }
          image={ tile.image } 
          override={ this.state.overrideUrl } 
          doublerow={tile.row} 
          doubleheight={tile.column} 
          onMouseEnter={ (e)=>{ this.setState({ overrideUrl: tile.image }); } } 
          onMouseLeave={ (e)=>{ this.setState({overrideUrl: null}); } } 
        ></Card>
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
