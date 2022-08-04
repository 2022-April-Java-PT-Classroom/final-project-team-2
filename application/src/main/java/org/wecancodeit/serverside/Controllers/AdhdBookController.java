package org.wecancodeit.serverside.Controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Book;
import org.wecancodeit.serverside.Repositories.BookRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RequestMapping
@RestController
@CrossOrigin
public class BookController {

    @Resource
    private BookRepository bookRepo;

    @GetMapping("/api/book")
    public Collection<Book>getBook(){
        return (Collection<Book>) bookRepo.findAll();
    }

    @PostMapping("/api/books")

    public Collection<Book>addResource(@RequestBody String body) throws JSONException {
        JSONObject newBook = new JSONObject(body);
        String addBookTitle = newBook.getString("title");

        return (Collection<Book>) bookRepo.findAll();
    }
}
