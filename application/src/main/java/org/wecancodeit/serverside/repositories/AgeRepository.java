package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.Age;

import java.util.Optional;

public interface AgeRepository extends CrudRepository<Age, Long> {
    Optional<Age> findByName(String itemName);
}
