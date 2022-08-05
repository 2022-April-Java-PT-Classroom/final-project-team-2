package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.AdhdWebsite;

public interface AdhdWebsiteRepository extends CrudRepository<AdhdWebsite, Long> {
    AdhdWebsite findByTitle(String title);
}
