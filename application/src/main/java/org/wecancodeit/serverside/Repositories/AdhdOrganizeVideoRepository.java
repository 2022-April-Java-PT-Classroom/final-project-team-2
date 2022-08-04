package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.AdhdVideo;

public interface OrganizeVideoRepository extends CrudRepository<AdhdVideo, Long> {
    AdhdVideo findByTitle(String title);
}
