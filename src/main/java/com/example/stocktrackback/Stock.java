package com.example.stocktrackback;

public class Stock extends Security {
    private String ticker;

    public Stock(String id, String name, int quantity, int purchase_price, int current_price, String ticker) {
        super(id, name, quantity, purchase_price, current_price);
        this.ticker = ticker;
    }

    @Override
    public double getCurrentValue() {
        return getCurrent_price() * getQuantity();
    }

    @Override
    public String getType() {
        return("Stock");
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    } 
}
