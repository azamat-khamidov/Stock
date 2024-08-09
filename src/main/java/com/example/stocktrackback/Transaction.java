package com.example.stocktrackback;

public class Transaction {
    public enum TransactionType {
        BUY, SELL
    }

    private final String security;
    private final double price;
    private final int quantity;
    private final TransactionType type;

    public Transaction(Security security, double price, int quantity, TransactionType type){
        this.security = security.getId();
        this.price = price;
        this.quantity = quantity;
        this.type = type;
    }

    public String getSecurity() {
        return security;
    }

    public double getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public TransactionType getType() {
        return type;
    }
}
