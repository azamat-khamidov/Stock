import axios from 'axios';

const addr = axios.create({
  baseURL: 'http://localhost:8080',
  proxy: false
})

export const MakeMarketBuyAPI = async (ticker, quantity, price, cost) => {
  try {
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    date = yyyy + '-' + mm + '-' + dd;

    const response = await addr.post('/portfolio/stock/buy', null, { params: { ticker, quantity, date, price, cost }});
    console.log('Market Buy Response:', response.data);
  } catch (error) {
    console.error('Error making market buy API call:', error);
  }
};

export const MakeMarketSellAPI = async (ticker, quantity, price, cost) => {
  try {
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    date = yyyy + '-' + mm + '-' + dd;

    const response = await addr.post('/portfolio/stock/sell', null, {params: { ticker, quantity, date, price, cost}});
    console.log('Market Sell Response:', response.data);
  } catch (error) {
    console.error('Error making market sell API call:', error);
  }
};

export const GetTransactionsAPI = async () => {
  try {
    const response = await addr.get('/get-all-transactions');
    console.log('Get Transactions Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error making get transactions API call:', error);
  }
};

export const GetCashAPI = async () => {
  try {
    const response = await addr.get('/portfolio/cash');
    console.log('Get Cash Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error making get cash API call:', error);
  }
};

export const GetStocksAPI = async () => {
  try {
    const response = await addr.get('/get-all-stocks');
    console.log('Get stocks Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error making get stocks API call:', error);
  }
};

export const GetBondsAPI = async () => {
  try {
    const response = await addr.get('/get-all-bonds');
    console.log('Get bonds Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error making get bonds API call:', error);
  }
};

export const GetBondByNameAPI = async (name) => {
  try {
    const response = await addr.get('/get-bond/' + name);
    console.log('Get bond by name Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error making get bond by name API call:', error);
  }
};

export const GetStockByTickerAPI = async (ticker) => {
  try {
    const response = await addr.get('/get-stock/' + ticker);
    console.log('Get stock by ticker Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error making get stock by ticker API call:', error);
  }
};

export const PutCashAPI = async (cash) => {
  try {
    const response = await addr.put('/portfolio/cash', null, { params: { cash } });
    console.log('Add cash Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error making add cash API call:', error);
  }
};