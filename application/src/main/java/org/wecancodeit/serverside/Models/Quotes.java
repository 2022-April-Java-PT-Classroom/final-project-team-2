package org.wecancodeit.serverside.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


//In this java class I will be constructing a backend API to store all inspirational qoutes for our users to look back to for positive reinforcement.
@Entity
public class Quotes {

    @Id
    @GeneratedValue
    public Long id;
    public String name;
    public String summary;

    public Quotes(){

    }

    public Quotes(Long id, String name, String summary){
        this.id = id;
        this.name = name;
        this.summary = summary;
    }

    public Long getId(){
        return id;
    }
    public String getName(){
        return name;
    }
    public String getSummary(){
        return summary;
    }

}
