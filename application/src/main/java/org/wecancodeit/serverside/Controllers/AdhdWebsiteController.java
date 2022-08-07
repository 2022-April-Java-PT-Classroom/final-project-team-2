package org.wecancodeit.serverside.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Adhdwebsite;
import org.wecancodeit.serverside.Repositories.AdhdwebsiteRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class AdhdwebsiteController {

    @Resource
    private AdhdwebsiteRepository adhdwebsiteRepo;

    @GetMapping("/pages/adhdwebsite")
    public Collection<Adhdwebsite> getAdhdwebsite(){
        return (Collection<Adhdwebsite>) adhdwebsiteRepo.findAll();
    }

}

