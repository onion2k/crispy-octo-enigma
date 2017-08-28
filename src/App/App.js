import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Card from '../Card/Card';

class App extends Component {
  constructor(){
    super();

    const el = document.body;
    const dimensions = el.clientWidth+'x'+(el.clientWidth * 0.8);
    const images = [
      'https://source.unsplash.com/tvPvROBv0F4/'+dimensions,
      'https://source.unsplash.com/WeYamle9fDM/'+dimensions,
      'https://source.unsplash.com/cEeEtjedNls/'+dimensions,
      'https://source.unsplash.com/CuQcdYCNiQM/'+dimensions,
      'https://source.unsplash.com/AtvuPUenaeI/'+dimensions,
      'https://source.unsplash.com/0PnQQ4hp_u8/'+dimensions,
      'https://source.unsplash.com/dv9e60nNywM/'+dimensions,
      'https://source.unsplash.com/vYg2mWKqQcU/'+dimensions,
      'https://source.unsplash.com/Wyohw2iIIks/'+dimensions,
      'https://source.unsplash.com/b4SRwTQget8/'+dimensions,
      'https://source.unsplash.com/ps2daRcXYes/'+dimensions,
      'https://source.unsplash.com/SVqeVMCk9PE/'+dimensions,
      'https://source.unsplash.com/B7TDIipUuas/'+dimensions,
      'https://source.unsplash.com/IY-gY1FK-bo/'+dimensions,
      'https://source.unsplash.com/Ks6jZqVvvpo/'+dimensions,
      'https://source.unsplash.com/esTP6gqfm54/'+dimensions
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
