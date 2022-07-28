package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.wecancodeit.serverside.Models.Quotes;
import org.wecancodeit.serverside.Repositories.QuotesRepository;

import org.wecancodeit.serverside.models.ParentResource;
import org.wecancodeit.serverside.repositories.ParentResourceRepository;


import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

  @Resource
  public QuotesRepository quotesRepo;
  
  @Resource
  private ParentResourceRepository parentResourceRepo;

    @Override
    public void run(String... args) throws Exception {
        Quotes sample1 = new Quotes(1L, "Adam Levine", "Remeber that you are not alone. There are others going through the same things.");
        quotesRepo.save(sample1);
        Quotes sample2 = new Quotes(2L, "David Neeleman", "If someone told me I could be normal or continue to have ADD, I would take the ADD.");
        quotesRepo.save(sample2);
        Quotes sample3 = new Quotes(3l, "Debbie Phelps", "The diagnosis made me want to prove everyone wrong. I knew that, if I collaborated with Michael, he could achieve anything he set his mind to.");
        quotesRepo.save(sample3);
        Quotes sample4 = new Quotes(4L, "Lisa Aro", "Normal is overrated.");
        quotesRepo.save(sample4);
        Quotes sample5 = new Quotes(5L, "Howie Mandel", "I didn't let ADHD prevent me from achieving my goals, and neither should you.");
        quotesRepo.save(sample5);

    //private ParentResourceRepository parentResourceRepo;

    //@Override
    //public void run(String... args) throws Exception {

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
