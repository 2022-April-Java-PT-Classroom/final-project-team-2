package org.wecancodeit.serverside.Repositories;


import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Quotes;

import java.util.Optional;

public interface QuotesRepository extends CrudRepository<Quotes, Long> {
    Optional<Quotes> findByName(String QuotesName);
}
