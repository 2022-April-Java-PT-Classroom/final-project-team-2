package org.wecancodeit.serverside.Controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.AdhdWebsite;
import org.wecancodeit.serverside.Repositories.AdhdWebsiteRepository;

import javax.annotation.Resource;
import java.util.Collection;


@RequestMapping
@RestController
@CrossOrigin
public class AdhdWebsiteController {

    @Resource
    private AdhdWebsiteRepository adhdWebsiteRepo;

    @GetMapping("/api/adhdwebsite")
    public Collection<AdhdWebsite>getWebsite(){
        return (Collection<AdhdWebsite>) adhdWebsiteRepo.findAll();
    }

    @PostMapping("/api/adhdwebsites")

    public Collection<AdhdWebsite>addResource(@RequestBody String body) throws JSONException {
        JSONObject newWebsite = new JSONObject(body);
        String addWebsiteTitle = newWebsite.getString("title");

        return (Collection<AdhdWebsite>) adhdWebsiteRepo.findAll();
    }
}
