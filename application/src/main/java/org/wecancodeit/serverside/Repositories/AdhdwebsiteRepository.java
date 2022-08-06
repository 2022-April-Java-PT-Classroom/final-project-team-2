package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Adhdwebsite;

import java.util.Optional;

public interface AdhdwebsiteRepository extends CrudRepository<Adhdwebsite, Long> {
    Optional<Adhdwebsite> findByTitle(String AdhdwebsiteTitle);
}
