package org.wecancodeit.serverside.Models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Age {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private boolean isSelected;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean getSelected(){return isSelected;}

    public void setSelected(boolean ageIsSelected) {
        this.isSelected = ageIsSelected;
    }

    public Age(){}

    public Age(String name, boolean isSelected) {
        this.name = name;
        this.isSelected = isSelected;
    }

}
