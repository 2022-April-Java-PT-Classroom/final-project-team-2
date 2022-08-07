package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Adhdtedxvideo;

import java.util.Optional;

public interface AdhdtedxvideoRepository extends CrudRepository<Adhdtedxvideo, Long> {
    Optional<Adhdtedxvideo> findByTitle(String AdhdtedxvideoTitle);
}