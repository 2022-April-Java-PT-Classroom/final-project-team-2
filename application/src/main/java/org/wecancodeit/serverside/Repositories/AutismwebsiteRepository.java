package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Autismwebsite;

import java.util.Optional;

public interface AutismwebsiteRepository extends CrudRepository<Autismwebsite, Long> {
    Optional<Autismwebsite> findByTitle(String AutismwebsiteTitle);
}

