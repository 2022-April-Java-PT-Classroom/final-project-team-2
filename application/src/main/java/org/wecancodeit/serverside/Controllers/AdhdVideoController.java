package org.wecancodeit.serverside.Controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.AdhdVideo;
import org.wecancodeit.serverside.Repositories.AdhdVideoRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RequestMapping
@RestController
@CrossOrigin
public class AdhdVideoController {

    @Resource
    private AdhdVideoRepository adhdVideoRepo;

    @GetMapping("/api/adhdvideo")
    public Collection<AdhdVideo>getVideo(){
        return (Collection<AdhdVideo>) adhdVideoRepo.findAll();
    }

    @PostMapping("/api/adhdvideos")

    public Collection<AdhdVideo>addResource(@RequestBody String body) throws JSONException {
        JSONObject newAdhdVideo = new JSONObject(body);
        String addVideoTitle = newAdhdVideo.getString("title");

        return (Collection<AdhdVideo>) adhdVideoRepo.findAll();
    }
}
