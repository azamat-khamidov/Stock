package com.example.stocktrackback;

public class Stock extends Security {
    public Stock(String id, String name) {
        super(id, name);
    }

    @Override
    public double getCurrentValue() {
        return 0; //TODO query Yahoo
    }

    @Override
    public String getType() {
        return("Stock");
    }
}
