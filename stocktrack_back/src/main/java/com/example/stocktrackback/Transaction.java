package com.example.stocktrackback;

import java.sql.Date;
import java.util.UUID;

public class Transaction {
    public enum TransactionType {
        BUY, SELL
    }

    private final Date date;
    private final UUID id;
    private final String security;
    private final double price;
    private final int quantity;
    private final TransactionType type;

    public Transaction(Security security, double price, int quantity, TransactionType type, Date date){
        this.security = security.getId();
        this.price = price;
        this.quantity = quantity;
        this.type = type;
        this.date = date;
        id = UUID.randomUUID();
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

    public Date getDate() {
        return date;
    }

    public UUID getId() {
        return id;
    }
}
