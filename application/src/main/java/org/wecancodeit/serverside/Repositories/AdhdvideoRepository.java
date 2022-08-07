package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Adhdvideo;

import java.util.Optional;

public interface AdhdvideoRepository extends CrudRepository<Adhdvideo, Long> {
    Optional<Adhdvideo> findByTitle(String AdhdvideoTitle);
}

