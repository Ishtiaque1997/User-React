import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import fakeData from './FakeData/userData'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <List></List>
    
    </div>
  );
}

export default App;
