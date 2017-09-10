import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { PRODUCTS } from './mockData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={PRODUCTS}/>
      </div>
    );
  }
}

export default App;
