package com.example.stocktrackback;

public class Stock extends Security {
    private String ticker;

    public Stock(String id, String name, String ticker) {
        super(id, name);
        this.ticker = ticker;
    }

    @Override
    public double getCurrentValue() {
        return 0; //TODO query Yahoo
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
