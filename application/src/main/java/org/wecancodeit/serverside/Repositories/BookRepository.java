package org.wecancodeit.serverside.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wecancodeit.serverside.Models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {
    Book findByType(String subject);
    Book findByTitle(String title);
}
