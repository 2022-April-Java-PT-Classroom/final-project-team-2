package org.wecancodeit.serverside.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Autismbook;
import org.wecancodeit.serverside.Repositories.AutismbookRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class AutismbookController {

    @Resource
    private AutismbookRepository autismbookRepo;

    @GetMapping("/pages/autismbook")
    public Collection<Autismbook> getAutismbook(){
        return (Collection<Autismbook>) autismbookRepo.findAll();
    }

}

