package org.wecancodeit.serverside.Controllers;


import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Quotes;
import org.wecancodeit.serverside.Repositories.QuotesRepository;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@CrossOrigin("*")
@RequestMapping
@RestController
public class QuotesRestController {

    @Resource
    private QuotesRepository quotesRepo;

    @GetMapping("/pages/quotes")
    public Collection<Quotes> getQuotesModel(){
        return (Collection<Quotes>) quotesRepo.findAll();
    }

    @GetMapping("/pages/quote/{id}")
    public Optional<Quotes> getQuotes(@PathVariable Long id) {return quotesRepo.findById(id);
    }



}
