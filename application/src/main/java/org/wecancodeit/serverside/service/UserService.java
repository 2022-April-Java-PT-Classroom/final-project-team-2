package org.wecancodeit.serverside.service;

import org.springframework.stereotype.Service;
import org.wecancodeit.serverside.Models.User;
import org.wecancodeit.serverside.Repositories.UserRepository;

@Service
public class UserService {

    public UserRepository userRepo;
    User Usermodel = new User();

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User registerUser(String login, String password, String email) {
        if (login == null || password == null || email == null) {
            return null;
        }else {
            if(userRepo.findByLogin(login).isPresent()){
                System.out.println("Duplicate Login");
                return null;
            }
            User usermodel = new User();
            usermodel.setId(usermodel.getId());
            usermodel.setLogin(usermodel.getLogin());
            usermodel.setPassword(usermodel.getPassword());
            usermodel.setEmail(usermodel.getEmail());
            return userRepo.save(usermodel);

        }
    }
    public User authenticate(String login,String password){
        return userRepo.findByLoginAndPassword(login, password).orElse(null);
    }
}
