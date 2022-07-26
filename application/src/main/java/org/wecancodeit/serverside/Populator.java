package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wecancodeit.serverside.Models.Quotes;
import org.wecancodeit.serverside.Repositories.QuotesRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    public QuotesRepository quotesRepo;

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
    }
}
