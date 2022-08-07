package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Autismbook;

import java.util.Optional;

public interface AutismbookRepository extends CrudRepository<Autismbook, Long> {
    Optional<Autismbook> findByTitle(String AutismbookTitle);
}
