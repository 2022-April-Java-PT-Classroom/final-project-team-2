package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.AdhdBook;

public interface AdhdBookRepository extends CrudRepository<AdhdBook, Long> {
    AdhdBook findByTitle(String title);
}
