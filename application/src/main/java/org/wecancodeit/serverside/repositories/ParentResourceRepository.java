package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.ParentResource;

public interface ParentResourceRepository extends CrudRepository<ParentResource, Long> {
    ParentResource findByType(String type);
    ParentResource findByTitle(String title);
}
