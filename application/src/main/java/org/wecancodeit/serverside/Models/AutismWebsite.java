package org.wecancodeit.serverside.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class AdhdWebsite {

    @Id
    @GeneratedValue
    private Long id;
    @Lob
    private String title;
    @Lob
    private String url;


    public AdhdWebsite() {

    }

    public  Long getId(){return id;}
    public String getTitle(){return title;}
    public String getUrl(){return url;}

    public AdhdWebsite(String title, String url) {
        this.title = title;
        this.url = url;
    }

}
