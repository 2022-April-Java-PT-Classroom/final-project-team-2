package org.wecancodeit.serverside.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class AdhdBook {

    @Id
    @GeneratedValue
    private Long id;
    @Lob
    private String title;
    @Lob
    private String author;


    public AdhdBook() {

    }

    public  Long getId(){return id;}
    public String getTitle(){return title;}
    public String getAuthor(){return author;}

    public AdhdBook(String title, String author) {
        this.title = title;
        this.author = author;
    }

}
