package org.wecancodeit.serverside.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wecancodeit.serverside.Models.Adhdbook;
import org.wecancodeit.serverside.Repositories.AdhdbookRepository;

import javax.annotation.Resource;
import java.util.Collection;

@RestController
@CrossOrigin
public class AdhdbookController {

    @Resource
    private AdhdbookRepository adhdbookRepo;

    @GetMapping("/pages/adhdbook")
    public Collection<Adhdbook> getAdhdbook(){
        return (Collection<Adhdbook>) adhdbookRepo.findAll();
    }

}

