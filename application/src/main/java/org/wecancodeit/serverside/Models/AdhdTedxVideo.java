package org.wecancodeit.serverside.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class TedxVideo {

    @Id
    @GeneratedValue
    private Long id;
    @Lob
    private String title;
    @Lob
    private String url;


    public TedxVideo(){

    }

    public TedxVideo(String title, String url) {
        this.title = title;
        this.url = url;
    }

    public  Long getId(){return id;}
    public String getTitle(){return title;}
    public String getUrl(){return url;}

}
