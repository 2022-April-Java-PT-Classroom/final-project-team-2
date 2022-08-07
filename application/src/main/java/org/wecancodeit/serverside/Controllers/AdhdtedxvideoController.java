package org.wecancodeit.serverside.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Adhdtedxvideo;
import org.wecancodeit.serverside.Repositories.AdhdtedxvideoRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class AdhdtedxvideoController {

    @Resource
    private AdhdtedxvideoRepository adhdtedxvideoRepo;

    @GetMapping("/pages/adhdtedxvideo")
    public Collection<Adhdtedxvideo> getAdhdtedxvideo(){
        return (Collection<Adhdtedxvideo>) adhdtedxvideoRepo.findAll();
    }

}
