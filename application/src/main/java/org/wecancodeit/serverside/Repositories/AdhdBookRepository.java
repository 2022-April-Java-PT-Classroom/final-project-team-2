package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Adhdbook;

import java.util.Optional;

public interface AdhdbookRepository extends CrudRepository<Adhdbook, Long> {
    Optional<Adhdbook> findByTitle(String AdhdbookTitle);
}
