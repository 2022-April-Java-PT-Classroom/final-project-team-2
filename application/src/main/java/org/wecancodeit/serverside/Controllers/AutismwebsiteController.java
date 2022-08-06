package org.wecancodeit.serverside.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Autismwebsite;
import org.wecancodeit.serverside.Repositories.AutismwebsiteRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class AutismwebsiteController {

    @Resource
    private AutismwebsiteRepository autismwebsiteRepo;

    @GetMapping("/pages/autismwebsite")
    public Collection<Autismwebsite> getAutismwebsite(){
        return (Collection<Autismwebsite>) autismwebsiteRepo.findAll();
    }

}
