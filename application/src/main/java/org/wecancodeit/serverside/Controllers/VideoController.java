package org.wecancodeit.serverside.Controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Video;
import org.wecancodeit.serverside.Repositories.VideoRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class VideoController {

    @Resource
    private VideoRepository videoRepo;

    @GetMapping("/api/video")
    public Collection<Video>getWebsite(){
        return (Collection<Video>) videoRepo.findAll();
    }

    @PostMapping("/api/videos")

    public Collection<Video>addResource(@RequestBody String body) throws JSONException {
        JSONObject newVideo = new JSONObject(body);
        String addVideoTitle = newVideo.getString("title");

        return (Collection<Video>) videoRepo.findAll();
    }
}
