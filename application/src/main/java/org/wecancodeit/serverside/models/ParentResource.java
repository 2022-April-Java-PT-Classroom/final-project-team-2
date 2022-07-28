package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class ParentResource {

    @Id
    @GeneratedValue
    private Long id;
    private String type;
    @Lob
    private String title;
    @Lob
    private String author;
    @Lob
    private String url;

    public ParentResource() {

    }

    public  Long getId(){return id;}
    public String getType(){return type;}
    public String getTitle(){return title;}
    public String getAuthor(){return author;}
    public String getUrl(){return url;}

    public ParentResource(String type, String title, String author, String url) {
        this.type = type;
        this.title = title;
        this.author = author;
        this.url = url;
    }

}
