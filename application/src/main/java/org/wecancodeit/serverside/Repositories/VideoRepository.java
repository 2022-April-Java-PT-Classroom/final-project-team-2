package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Video;

public interface VideoRepository extends CrudRepository<Video, Long> {
    Video findBySubject(String subject);
    Video findByTitle(String title);
}
