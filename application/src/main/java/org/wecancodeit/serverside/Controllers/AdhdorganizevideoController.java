package org.wecancodeit.serverside.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Adhdorganizevideo;
import org.wecancodeit.serverside.Repositories.AdhdorganizevideoRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class AdhdorganizevideoController {

    @Resource
    private AdhdorganizevideoRepository adhdorganizevideoRepo;

    @GetMapping("/pages/adhdorganizevideo")
    public Collection<Adhdorganizevideo> getAdhdorganizevideo(){
        return (Collection<Adhdorganizevideo>) adhdorganizevideoRepo.findAll();
    }

}
