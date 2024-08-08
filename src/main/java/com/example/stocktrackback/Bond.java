package com.example.stocktrackback;

public class Bond extends Security{
    private double interestRate;

    public Bond(String id, String name, int quantity, int purchase_price, int current_price) {
        super(id, name, quantity, purchase_price, current_price);
        this.interestRate = interestRate;
    }

    @Override
    public double getCurrentValue() {
        return getCurrent_price() * getQuantity();
    }

    @Override
    public String getType() {
        return "Bond";
    }
    
    public double getInterestRate() {
        return interestRate;
    }
    public void updateInterestRate(double interestRate) {
        // TODO: Possibly a call to Yahoo API 
        this.interestRate = interestRate;
    }
}
