import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener('DOMContentLoaded', () => {
  const apiKey = 'cqvr8c1r01qh7uf1mbqgcqvr8c1r01qh7uf1mbr0';
  const symbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'INTC', 'TSLA', 'BRK.B', 'C']; 

  async function fetchStockData() {
    try {
      const responses = await Promise.all(symbols.map(symbol => 
        axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`)
      ));
      const stockData = responses.map((response, index) => ({
        symbol: symbols[index],
        price: response.data.c
      }));
      updateStockBanner(stockData);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  }

  function updateStockBanner(stockData) {
    const newsArticlesDiv = document.getElementById('news-articles');
    const stockItems = stockData.map(stock => 
      `<div class="stock-item">${stock.symbol}: $${stock.price}</div>`
    ).join('');
    newsArticlesDiv.innerHTML = stockItems + stockItems;
  }

  fetchStockData();
});

