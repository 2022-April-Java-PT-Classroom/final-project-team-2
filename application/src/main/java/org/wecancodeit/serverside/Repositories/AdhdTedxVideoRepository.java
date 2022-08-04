package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.TedxVideo;

public interface TedxVideoRepository extends CrudRepository<TedxVideo, Long> {
    TedxVideo findByTitle(String title);
}
