package com.example.stocktrackback;

public class Bond extends Security{
    private double interestRate;

    public Bond(String id, String name, double interestRate) {
        super(id, name);
        this.interestRate = interestRate;
    }

    @Override
    public double getCurrentValue() {
        return 0; //TODO call yahoo api
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
