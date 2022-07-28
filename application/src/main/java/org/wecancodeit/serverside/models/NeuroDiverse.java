

package org.wecancodeit.serverside.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class NeuroDiverse {

    @Id
    @GeneratedValue
    private Long id;
    private String Autistic;
    private String Adhd;
    private String OnTheSpectrum;


    public Long getId() {
        return id;
    }

    public String getAutistic() {
        return Autistic;
    }

    public String getAdhd() {
        return Adhd;
    }

    public String getOnTheSpectrum() {
        return OnTheSpectrum;
    }

    public NeuroDiverse(Long id, String autistic, String adhd, String onTheSpectrum) {
        this.id = id;
        Autistic = autistic;
        Adhd = adhd;
        OnTheSpectrum = onTheSpectrum;
    }

    public NeuroDiverse() {
    }
}