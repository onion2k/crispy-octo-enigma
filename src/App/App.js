import React, { Component } from 'react';
import './App.css';

import Card from '../Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card doublerow doubleheight image="https://source.unsplash.com/800x600/?technology,pattern"></Card>
        <Card></Card>
        <Card></Card>
        <Card doublerow image="https://source.unsplash.com/800x600/?technology,pattern"></Card>
        <Card></Card>
        <Card doublerow image="https://source.unsplash.com/800x600/?technology,pattern"></Card>
        <Card></Card>
        <Card doublerow image="https://source.unsplash.com/800x600/?technology,pattern"></Card>
        <Card></Card>
        <Card doublerow image="https://source.unsplash.com/800x600/?technology,pattern"></Card>
        <Card></Card>
        <Card doublerow image="https://source.unsplash.com/800x600/?technology,pattern"></Card>
        <Card doublerow image="https://source.unsplash.com/800x600/?technology,pattern"></Card>
        <Card></Card>
        <Card></Card>
      </div>
    );
  }
}

export default App;
