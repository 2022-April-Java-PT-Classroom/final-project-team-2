package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Age;

import java.util.Optional;

public interface AgeRepository extends CrudRepository<Age, Long> {
    Optional<Age> findByName(String itemName);
}
