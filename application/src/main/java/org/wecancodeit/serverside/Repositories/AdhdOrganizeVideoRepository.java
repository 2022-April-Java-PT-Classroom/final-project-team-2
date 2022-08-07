package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Adhdorganizevideo;

import java.util.Optional;

public interface AdhdorganizevideoRepository extends CrudRepository<Adhdorganizevideo, Long> {
    Optional<Adhdorganizevideo> findByTitle(String AdhdorganizevideoTitle);
}
