package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.AdhdOrganizeVideo;

public interface AdhdOrganizeVideoRepository extends CrudRepository<AdhdOrganizeVideo, Long> {
    AdhdOrganizeVideo findByTitle(String title);
}
