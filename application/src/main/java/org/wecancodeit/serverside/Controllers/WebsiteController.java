package org.wecancodeit.serverside.Controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Website;
import org.wecancodeit.serverside.Repositories.WebsiteRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class WebsiteController {

    @Resource
    private WebsiteRepository websiteRepo;

    @GetMapping("/api/website")
    public Collection<Website>getWebsite(){
        return (Collection<Website>) websiteRepo.findAll();
    }

    @PostMapping("/api/websites")

    public Collection<Website>addResource(@RequestBody String body) throws JSONException {
        JSONObject newWebsite = new JSONObject(body);
        String addWebsiteTitle = newWebsite.getString("title");

        return (Collection<Website>) websiteRepo.findAll();
    }
}
