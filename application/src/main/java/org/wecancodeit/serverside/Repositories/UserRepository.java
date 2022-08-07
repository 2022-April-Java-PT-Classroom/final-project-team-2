package org.wecancodeit.serverside.Repositories;

<<<<<<< HEAD
import org.springframework.data.jpa.repository.JpaRepository;
=======
>>>>>>> 1a43c8de52c1de495ee92e0bd1c1a824e540abef
import org.wecancodeit.serverside.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer>{


    Optional<User> findByLoginAndPassword(String login, String password);
    Optional<User> findByLogin(String login);
}