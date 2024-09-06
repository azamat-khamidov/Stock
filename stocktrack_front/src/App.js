import React, {useState} from 'react';
import './App.css';
import './index';
import axios from 'axios';
import { MakeMarketBuyAPI, MakeMarketSellAPI } from './apiService';

function App() {
  const [activeButton, setActiveButton] = useState(null);
  const [ticker, setTicker] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState(null);
  const [cost, setCost] = useState(null);

  const handleMarketBuyClick = () => {
    setActiveButton(activeButton === 'buy' ? null : 'buy');
  };

  const handleMarketSellClick = () => {
    setActiveButton(activeButton === 'sell' ? null : 'sell');
  };

  const handleTickerChange = async (event) => {
    const newTicker = event.target.value;
    setTicker(newTicker);

    if (newTicker) {
      try {
        const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${newTicker}&token=cqvr8c1r01qh7uf1mbqgcqvr8c1r01qh7uf1mbr0`);
        setPrice(response.data.c);
        setCost(response.data.c * quantity);
      } catch (error) {
        console.error('Error fetching stock price:', error);
      }
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
    setCost(price * newQuantity);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (activeButton === 'buy') {
        MakeMarketBuyAPI(ticker.toUpperCase(), quantity, price, cost);
      } else if (activeButton === 'sell') {
        MakeMarketSellAPI(ticker.toUpperCase(), quantity, price, cost);
      }
    }
  };

  return (
    <div className="App">
      <div class="top-banner">
        <img src="Mi3Text.png" alt="Overlay Image" class="overlay-image"></img>
      </div>

      <div class="sub-banner"></div>
      
      
      <div class="parent-container">
        <div class="left-column">
              <h2>Assets</h2>
              <ul id="equities-list">
              </ul>
        </div>
        <div className="right-column">
          <h2>Performance Graph</h2>
          <div id="performance-graph">
            {/* TODO: JS population */}
          </div>
            <div className="functional-buttons">
          {activeButton !== 'sell' && activeButton !== 'performance' && (
            <button id="add-by-ticker" className="button-base" onClick={handleMarketBuyClick}>
              Market Buy
            </button>
          )}
          {activeButton === 'buy' && (
            <div className="input-container">
              <div className="input-group">
                <label>
                  Ticker:
                  <input type="text" value={ticker} onChange={handleTickerChange} onKeyDown={handleKeyDown}/>
                </label>
                {price !== null && <span className="price">Price: ${price}</span>}
              </div>
              <div className="input-group">
                <label>
                  Quantity:
                  <input type="number" value={quantity} onChange={handleQuantityChange} onKeyDown={handleKeyDown}/>
                </label>
                {cost !== null && <span className="cost">Cost: ${cost.toFixed(2)}</span>}
              </div>
            </div>
          )}
          {activeButton !== 'buy' && activeButton !== 'performance' && (
            <button id="delete-by-ticker" className="button-base" onClick={handleMarketSellClick}>
              Sell
            </button>
          )}
          {activeButton === 'sell' && (
            <div className="input-container">
              <div className="input-group">
                <label>
                  Ticker:
                  <input type="text" value={ticker} onChange={handleTickerChange} onKeyDown={handleKeyDown}/>
                </label>
                {price !== null && <span className="price">Price: ${price}</span>}
              </div>
              <div className="input-group">
                <label>
                  Quantity:
                  <input type="number" value={quantity} onChange={handleQuantityChange} onKeyDown={handleKeyDown}/>
                </label>
                {cost !== null && <span className="cost">Cost: ${cost.toFixed(2)}</span>}
              </div>
            </div>
          )}
          {activeButton !== 'buy' && activeButton !== 'sell' && (
            <button id="transaction-history" className="button-base">
              Transaction History
            </button>
          )}
        </div>
        </div>
      </div>

        <div className="lower-banner">
          <div id="news-articles"></div>
        </div>
      </div>
  );
}

export default App;