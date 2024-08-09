package com.example.stocktrackback;
import java.util.ArrayList;
import java.util.List;

public class Portfolio {
    private List<Security> securities;
    private List<Transaction> transactions;
    private int cash;
    
    public Portfolio(int initialCash) {
        this.securities = new ArrayList<>();
        this.transactions = new ArrayList<>();
        this.cash = initialCash;
    }

    public void addSecurity(Security security) {
        this.securities.add(security);
    }

    public void removeSecurity(Security security) {
        this.securities.remove(security);
        // TODO: This might need rethinking. How does the user
        // want to remove a security? Based on ticker?
    }

    public int getCash() {
        return cash;
    }

    public void setCash(int cash) {
        this.cash = cash;
    }
}
