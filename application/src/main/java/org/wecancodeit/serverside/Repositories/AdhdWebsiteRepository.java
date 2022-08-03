package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Website;

public interface WebsiteRepository extends CrudRepository<Website, Long> {
    Website findBySubject(String subject);
    Website findByTitle(String title);
}
