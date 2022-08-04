package org.wecancodeit.serverside.Controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.TedxVideo;
import org.wecancodeit.serverside.Repositories.TedxVideoRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RequestMapping
@RestController
@CrossOrigin("*")
public class TedxVideoController {

    @Resource
    private TedxVideoRepository tedxVideoRepo;

    @GetMapping("/api/tedxvideo")
    public Collection<TedxVideo> getTedxModel() {return (Collection<TedxVideo>) tedxVideoRepo.findAll();}

    @GetMapping("/api/tedxvideos")
    public Collection<TedxVideo>addResource(@RequestBody String body) throws JSONException {
        JSONObject newTedxVideo = new JSONObject(body);
        String addVideoTitle = newTedxVideo.getString("title");

        return (Collection<TedxVideo>) tedxVideoRepo.findAll();
    }
}
