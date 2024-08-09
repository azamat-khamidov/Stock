package com.example.stocktrackback;

public abstract class Security {
    private String id; // Should be the unique identifier of the security
    private String name;

    public Security(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public abstract double getCurrentValue(); // possibly calls the Yahoo API

    public abstract String getType(); // should be implemented in individual sub-classes

    public String getInfo() {
        return String.format("Name: %s, Type: %s",
                             name, getType());
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

}
