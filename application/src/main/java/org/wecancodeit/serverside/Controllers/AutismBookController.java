package org.wecancodeit.serverside.Controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.AdhdBook;
import org.wecancodeit.serverside.Repositories.AdhdBookRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RequestMapping
@RestController
@CrossOrigin
public class AdhdBookController {

    @Resource
    private AdhdBookRepository adhdBookRepo;

    @GetMapping("/api/adhdbook")
    public Collection<AdhdBook>getBook(){
        return (Collection<AdhdBook>) adhdBookRepo.findAll();
    }

    @PostMapping("/api/adhdbooks")

    public Collection<AdhdBook>addResource(@RequestBody String body) throws JSONException {
        JSONObject newBook = new JSONObject(body);
        String addBookTitle = newBook.getString("title");

        return (Collection<AdhdBook>) adhdBookRepo.findAll();
    }
}
