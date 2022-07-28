package org.wecancodeit.serverside.controllers;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.Age;
import org.wecancodeit.serverside.models.User;
import org.wecancodeit.serverside.repositories.AgeRepository;
import org.wecancodeit.serverside.repositories.UserRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class AgeController {

    @Resource
    private AgeRepository ageRepo;

    @Resource
    private UserRepository userRepo;

    @GetMapping("/api/{userName}/age")
    public Collection<Age> getAge(@PathVariable String userName) {
        Optional<User> user = userRepo.findByUserName(userName);
        return user.get().getAge();
    }

    @PostMapping("/api/{userName}/age/add-age")
    public Collection<Age> addAge(@PathVariable String userName, @RequestBody String body) throws JSONException {
        JSONObject newAge = new JSONObject(body);
        String Age = newAge.getString("Age");
        boolean ageIsSelected = newAge.getBoolean("isSelected");
        Optional<Age> itemToAddOpt = ageRepo.findByName(Age);
        Optional<User> user = userRepo.findByUserName(userName);
        if (itemToAddOpt.isEmpty()) {
            Age ageToAdd = new Age(Age, ageIsSelected);
            ageRepo.save(ageToAdd);
            user.get().addAge(ageToAdd);
            userRepo.save(user.get());
        }
        return user.get().getAge();
    }

    @PutMapping("/api/ages/{id}/select-Age")
    public Collection<Age> selectAge(@PathVariable Long id, @RequestBody String body) throws JSONException {
        JSONObject newAge = new JSONObject(body);
        boolean ageIsSelected = newAge.getBoolean("isSelected");
        Optional<Age> ageToSelectOpt = ageRepo.findById(id);

        if (ageToSelectOpt.isPresent()) {
            ageToSelectOpt.get().setSelected(ageIsSelected);
            ageRepo.save(ageToSelectOpt.get());
        }
        return (Collection<Age>) ageRepo.findAll();
    }

    @DeleteMapping("/api/age/{id}/delete-age")
    public Collection<Age> deleteAge(@PathVariable Long id) throws JSONException {
        Optional<Age> ageToRemoveOpt = ageRepo.findById(id);
        if (ageToRemoveOpt.isPresent()) {
            ageRepo.delete(ageToRemoveOpt.get());
        }
        return (Collection<Age>) ageRepo.findAll();
    }
}
