package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.AdhdTedxVideo;

public interface AdhdTedxVideoRepository extends CrudRepository<AdhdTedxVideo, Long> {
    AdhdTedxVideo findByTitle(String title);
}
