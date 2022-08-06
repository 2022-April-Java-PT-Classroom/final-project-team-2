package org.wecancodeit.serverside.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.wecancodeit.serverside.Models.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer>{


    Optional<User> findByLoginAndPassword(String login, String password);
    Optional<User> findByLogin(String login);
}