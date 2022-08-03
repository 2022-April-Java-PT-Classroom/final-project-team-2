package org.wecancodeit.serverside.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Video {

    @Id
    @GeneratedValue
    private Long id;
    private String subject;
    @Lob
    private String title;
    @Lob
    private String url;


    public Video() {

    }

    public  Long getId(){return id;}
    public String getType(){return subject;}
    public String getTitle(){return title;}
    public String getUrl(){return url;}

    public Video(String subject, String title, String url) {
        this.subject = subject;
        this.title = title;
        this.url = url;
    }

}
