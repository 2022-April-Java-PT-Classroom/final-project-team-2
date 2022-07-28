
package org.wecancodeit.serverside.repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.models.NeuroDiverse;

public interface NeuroRepository extends CrudRepository<NeuroDiverse, Long> {
}
