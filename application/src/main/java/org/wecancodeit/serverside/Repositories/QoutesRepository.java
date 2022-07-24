package org.wecancodeit.serverside.Repositories;


import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Qoutes;

import java.util.Optional;

public interface QoutesRepository extends CrudRepository<Qoutes, Long> {
    Optional<Qoutes> findByName(String qoutesModelName);
}
