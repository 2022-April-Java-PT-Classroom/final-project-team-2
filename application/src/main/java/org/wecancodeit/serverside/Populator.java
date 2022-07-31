package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.wecancodeit.serverside.Models.Quotes;
import org.wecancodeit.serverside.Repositories.QuotesRepository;
import org.wecancodeit.serverside.Models.Book;
import org.wecancodeit.serverside.Repositories.BookRepository;
import org.wecancodeit.serverside.Models.Website;
import org.wecancodeit.serverside.Repositories.WebsiteRepository;
import org.wecancodeit.serverside.Models.Video;
import org.wecancodeit.serverside.Repositories.VideoRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

  @Resource
  public QuotesRepository quotesRepo;
  @Resource
  public BookRepository bookRepo;
  @Resource
  public WebsiteRepository websiteRepo;
  @Resource
  public VideoRepository videoRepo;

    @Override
    public void run(String... args) throws Exception {
        // quotes
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


        // book
        Book Book1 = new Book("adhd", "ADHD Book Title", "ADHD Book Author");
        bookRepo.save(Book1);
        Book Book2 = new Book("autism", "Autism Book Title", "Autism Book Author");
        bookRepo.save(Book2);

        // website
        Website Website1 = new Website("adhd", "ADHD Website Title", "ADHD Website url");
        websiteRepo.save(Website1);
        Website Website2 = new Website("autism", "Autism Website Title", "Autism Website url");
        websiteRepo.save(Website2);

        // video
        Video Video1 = new Video("adhd", "What Exactly is Neurodiversity?",  "https://www.youtube.com/embed/ALJ3CFRRZpo");
        videoRepo.save(Video1);
        Video Video2 = new Video("adhd", "Are ADHDers more Susceptible to Gaslighting?", "https://www.youtube.com/embed/cQH28TVJBVQ");
        videoRepo.save(Video2);
        Video Video3 = new Video("adhd", "How Dopamine Affects Learning and Motivation in ADHD Brains", "https://www.youtube.com/embed/s_P6sNFjLzI");
        videoRepo.save(Video3);
        Video Video4 = new Video("adhd", "What is Executive Function and Why Do We Need it?", "https://www.youtube.com/embed/H4YIHrEu-TU");
        videoRepo.save(Video4);
        Video Video5 = new Video("adhd", "ADHD in Women", "https://www.youtube.com/embed/EMpt40zNK-w");
        videoRepo.save(Video5);
        Video Video6 = new Video("adhd", "Digital Brain Timer for Getting Projects Done!.", "https://www.youtube.com/embed/bWoYiTedxK4");
        videoRepo.save(Video6);
        Video Video7 = new Video("adhd", "What is ADHD?", "https://www.youtube.com/embed/xMWtGozn5jU");
        videoRepo.save(Video7);
        Video Video8 = new Video("adhd", "Why Is It So Hard to Do Something That Should Be Easy?", "https://www.youtube.com/embed/Uo08uS904Rg");
        videoRepo.save(Video8);
        Video Video9 = new Video("adhd", "How to Do Something That Should Be Easy (But...Is...Not)", "https://www.youtube.com/embed/hlObsAeFNVk");
        videoRepo.save(Video9);
        Video Video10 = new Video("adhd", "5 Tips to Make Assertive Communication Easier and More Effective", "https://www.youtube.com/embed/vlwmfiCb-vc");
        videoRepo.save(Video10);
        Video Video11 = new Video("adhd", "To the Teachers of ADHD Students (How Can I Help?)", "https://www.youtube.com/embed/2SFB8BTfAG0");
        videoRepo.save(Video11);
        Video Video12 = new Video("adhd", "Why You Can Focus on Video games (and How to Hack it)", "https://www.youtube.com/embed/R634ytgt7fw");
        videoRepo.save(Video12);
        Video Video13 = new Video("adhd", "ADHD and Friendships: How to Play the Social Game!", "https://www.youtube.com/embed/TvuIZxsD-T8");
        videoRepo.save(Video13);
        Video Video14 = new Video("adhd", "Anger and ADHD: How to Build up Your Brakes", "https://www.youtube.com/embed/9Aq7RNaB0DQ");
        videoRepo.save(Video14);
        Video Video15 = new Video("adhd", "Think You Have ADHD? How to Talk to Your Parents", "https://www.youtube.com/embed/YsREaxPHlZU");
        videoRepo.save(Video15);
        Video Video16 = new Video("adhd", "ADHD in Girls: How to Recognize the Symptoms", "https://www.youtube.com/embed/dmeE3qTJRUw");
        videoRepo.save(Video16);
        Video Video17 = new Video("adhd", "Are You Impulsive? How Meditation can Help", "https://www.youtube.com/embed/8oF0qaDDMQI");
        videoRepo.save(Video17);
        Video Video18 = new Video("adhd", "How to Stop Losing Things", "https://www.youtube.com/embed/8CvODrpfnaA");
        videoRepo.save(Video18);
        Video Video19 = new Video("adhd", "My 10 Favorite Things About having ADHD", "https://www.youtube.com/embed/wFCKa9CVzGU?start=4");
        videoRepo.save(Video19);
        Video Video20 = new Video("adhdTedx", "Failing at Normal: An ADHD Success Story | Jessica McCabe", "https://www.youtube.com/embed/JiwZQNYlGQI");
        videoRepo.save(Video20);
        Video Video21 = new Video("adhdTedx", "ADHD sucks, but not really | Salif Mahamane", "https://www.youtube.com/embed/fWCocjh5aK0");
        videoRepo.save(Video21);
        Video Video22 = new Video("adhdTedx", "I have ADHD, What is Your Superpower? | Negar (Nikki) Amini", "https://www.youtube.com/embed/mEI_39C5E2o?start=4");
        videoRepo.save(Video22);
        Video Video23 = new Video("adhdorganize", "ADHD Home Hacks - Real-Life Solutions for a Functional Home",  "https://www.youtube.com/embed/5M5IKj2WYWQ?start=4");
        videoRepo.save(Video23);
        Video Video24 = new Video("adhdorganize", "The Four Organizing Styles - Breakdown and FAQs",  "https://www.youtube.com/embed/hYtiQhCJ574?start=4");
        videoRepo.save(Video24);

    }

}
