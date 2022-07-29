package org.wecancodeit.serverside.controllers;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.models.ParentResource;
import org.wecancodeit.serverside.repositories.ParentResourceRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class ParentResourceController {

    @Resource
    private ParentResourceRepository parentResourceRepo;

    @GetMapping("/api/parentresource")
    public Collection<ParentResource>getParentResource(){
        return (Collection<ParentResource>) parentResourceRepo.findAll();
    }

    @PostMapping("/api/parentresources")

    public Collection<ParentResource>addResource(@RequestBody String body) throws JSONException {
        JSONObject newParentResource = new JSONObject(body);
        String addParentResourceTitle = newParentResource.getString("title");

        return (Collection<ParentResource>) parentResourceRepo.findAll();
    }
}
