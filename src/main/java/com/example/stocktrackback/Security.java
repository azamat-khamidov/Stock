package com.example.stocktrackback;

public abstract class Security {
    private String id; // Should be the unique identifier of the security
    private String name; 
    private int quantity; 
    private int purchase_price;
    private int current_price; // could use this for getting current market price?

    public Security(String id, String name, int quantity, int purchase_price, int current_price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.purchase_price = purchase_price;
        this.current_price = current_price;
    }

    public abstract double getCurrentValue(); // possibly calls the Yahoo API

    public abstract String getType(); // should be implemented in individual sub-classes

    public String getInfo() {
        return String.format("Name: %s, Type: %s, Quantity: %d, Unrealized Return: %.2f",
                             name, getType(), quantity, current_price - purchase_price);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPurchase_price() {
        return purchase_price;
    }

    public int getCurrent_price() {
        return current_price;
    }
}
