package org.wecancodeit.serverside.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.Models.Adhdvideo;
import org.wecancodeit.serverside.Repositories.AdhdvideoRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class AdhdvideoController {

    @Resource
    private AdhdvideoRepository adhdvideoRepo;

    @GetMapping("/pages/adhdvideo")
    public Collection<Adhdvideo> getAdhdvideo(){
        return (Collection<Adhdvideo>) adhdvideoRepo.findAll();
    }

}
