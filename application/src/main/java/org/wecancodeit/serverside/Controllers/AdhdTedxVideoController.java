package org.wecancodeit.serverside.Controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.AdhdTedxVideo;
import org.wecancodeit.serverside.Repositories.AdhdTedxVideoRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RequestMapping
@RestController
@CrossOrigin("*")
public class AdhdTedxVideoController {

    @Resource
    private AdhdTedxVideoRepository adhdTedxVideoRepo;

    @GetMapping("/api/tedxvideo")
    public Collection<AdhdTedxVideo> getTedxModel() {return (Collection<AdhdTedxVideo>) adhdTedxVideoRepo.findAll();}

    @GetMapping("/api/tedxvideos")
    public Collection<AdhdTedxVideo>addResource(@RequestBody String body) throws JSONException {
        JSONObject newTedxVideo = new JSONObject(body);
        String addVideoTitle = newTedxVideo.getString("title");

        return (Collection<AdhdTedxVideo>) adhdTedxVideoRepo.findAll();
    }
}
