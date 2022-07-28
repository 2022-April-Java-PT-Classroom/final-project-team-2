package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.models.ParentResource;
import org.wecancodeit.serverside.repositories.ParentResourceRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private ParentResourceRepository parentResourceRepo;

    @Override
    public void run(String... args) throws Exception {

        // book resources
        ParentResource testBook1 = new ParentResource("book", "Test Book1 Title",
                "Test Book1 Author", "Test Book1 url");
        ParentResource testBook2 = new ParentResource("book", "Test Book2 Title",
                "Test Book2 Author", "Test Book2 url");
        parentResourceRepo.save(testBook1);
        parentResourceRepo.save(testBook2);

        // website resources
        ParentResource testWebsite1 = new ParentResource("website", "Test Website1 Title",
                "Test Website1 Author", "Test Book1 url");
        ParentResource testWebsite2 = new ParentResource("website", "Test Website2 Title",
                "Test Website2 Author", "Test Website2 url");
        parentResourceRepo.save(testWebsite1);
        parentResourceRepo.save(testWebsite2);

        // video resources
        ParentResource testVideo1 = new ParentResource("video", "Test Video1 Title",
                "Test Video1 Author", "Test Video1 url");
        ParentResource testVideo2 = new ParentResource("video", "Test Video2 Title",
                "Test Video2 Author", "Test Video2 url");
        parentResourceRepo.save(testVideo1);
        parentResourceRepo.save(testVideo2);
    }
}
