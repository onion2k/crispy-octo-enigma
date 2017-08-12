import React, { Component } from 'react';
import './App.css';

import Card from '../Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card double></Card>
        <Card></Card>
        <Card></Card>
        <Card double></Card>
        <Card></Card>
        <Card double></Card>
        <Card></Card>
        <Card double></Card>
        <Card></Card>
        <Card double></Card>
        <Card></Card>
        <Card double></Card>
        <Card double></Card>
      </div>
    );
  }
}

export default App;
