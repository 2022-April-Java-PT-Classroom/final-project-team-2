package org.wecancodeit.serverside.Controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.serverside.Models.Qoutes;
import org.wecancodeit.serverside.Repositories.QoutesRepository;

import javax.annotation.Resource;
import java.util.Collection;

@CrossOrigin("*")
@RestController
public class QoutesRestController {

    @Resource
    private QoutesRepository qoutesRepo;

    @GetMapping("/api/qoutes")
    public Collection<Qoutes> getQoutesModel(){
        return (Collection<Qoutes>) qoutesRepo.findAll();
    }

}
