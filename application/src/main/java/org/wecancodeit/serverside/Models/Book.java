package org.wecancodeit.serverside.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Book {

    @Id
    @GeneratedValue
    private Long id;
    private String subject;
    @Lob
    private String title;
    @Lob
    private String author;


    public Book() {

    }

    public  Long getId(){return id;}
    public String getType(){return subject;}
    public String getTitle(){return title;}
    public String getAuthor(){return author;}

    public Book(String subject, String title, String author) {
        this.subject = subject;
        this.title = title;
        this.author = author;
    }

}
