import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  // initial state
  state = {
    stocks: [],
  };

  // fetch request to access the data and parsed to stocks
  componentDidMount() {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then((stocks) => this.setState({ stocks }))
  };

  // render the stock component and mapping over each stock
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {//render the list of stocks here passing props 
          this.state.stocks.map((stock) => (
            <Stock
              name={stock.name}
              ticker={stock.ticker}
              price={stock.price} />
          ))}
      </div>
    );
  }

}

export default StockContainer;
