package org.wecancodeit.serverside.Models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String userName;
    @OneToMany
    private Collection<Age> age;

    public String getUserName() {
        return userName;
    }

    public Long getId() {
        return id;
    }

    public Collection<Age> getAge(){
        return age;
    }

    protected User(){}

    public User(String userName, Age ...age) {
        this.userName = userName;
        this.age = new HashSet<>(Arrays.asList(age));
    }

    public void addAge(Age ageAdd) {
        age.add(ageAdd);
    }
}
