package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.wecancodeit.serverside.Models.Quotes;
import org.wecancodeit.serverside.Repositories.QuotesRepository;
import org.wecancodeit.serverside.Models.AdhdBook;
import org.wecancodeit.serverside.Repositories.AdhdBookRepository;
import org.wecancodeit.serverside.Models.AdhdWebsite;
import org.wecancodeit.serverside.Repositories.AdhdWebsiteRepository;
import org.wecancodeit.serverside.Models.AdhdVideo;
import org.wecancodeit.serverside.Repositories.AdhdVideoRepository;
import org.wecancodeit.serverside.Models.AdhdTedxVideo;
import org.wecancodeit.serverside.Repositories.AdhdTedxVideoRepository;
import org.wecancodeit.serverside.Models.AdhdOrganizeVideo;
import org.wecancodeit.serverside.Repositories.AdhdOrganizeVideoRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {


  @Resource
  public QuotesRepository quotesRepo;
  @Resource
  public AdhdBookRepository adhdBookRepo;
  @Resource
  public AdhdWebsiteRepository adhdWebsiteRepo;
  @Resource
  public AdhdVideoRepository adhdVideoRepo;
    @Resource
    public AdhdTedxVideoRepository adhdTedxVideoRepo;
    @Resource
    public AdhdOrganizeVideoRepository adhdOrganizeVideoRepo;

    @Override
    public void run(String... args) throws Exception {

        Quotes sample1 = new Quotes(1L, "Adam Levine", "https://media1.giphy.com/media/woBgfZvByy4lG/giphy.gif?cid=ecf05e472bki6a7egagw8vwh983hywj897xj8lbfp9y8jz37&rid=giphy.gif&ct=g", "Remember that you are not alone. There are others going through the same things.");
        quotesRepo.save(sample1);
        Quotes sample2 = new Quotes(2L, "David Neeleman", "","If someone told me I could be normal or continue to have ADD, I would take the ADD.");
        quotesRepo.save(sample2);
        Quotes sample3 = new Quotes(3l, "Debbie Phelps", "","The diagnosis made me want to prove everyone wrong. I knew that, if I collaborated with Michael, he could achieve anything he set his mind to.");
        quotesRepo.save(sample3);
        Quotes sample4 = new Quotes(4L, "Lisa Aro", "","Normal is overrated.");
        quotesRepo.save(sample4);
        Quotes sample5 = new Quotes(5L, "Howie Mandel", "https://media0.giphy.com/media/3UkLpXdOQObihD4phW/giphy.gif?cid=ecf05e47ujabqhg2qa3fxj1uxvm67ncxgn0ofc664boup2a7&rid=giphy.gif&ct=g","I didn't let ADHD prevent me from achieving my goals, and neither should you.");
        quotesRepo.save(sample5);
        Quotes sample6 = new Quotes(6L, "Walt Disney", "https://media0.giphy.com/media/3aJr6ausLWdry/giphy.gif?cid=ecf05e47ydvoucsf3pc2q41rj0r41x6kdg67d39g0csdog4e&rid=giphy.gif&ct=g","You're braver than you believe, stronger than you seem, and smarter than you think.");
        quotesRepo.save(sample6);
        Quotes sample7 = new Quotes(7L, "Susan Boyle", "https://media3.giphy.com/media/QIORKyMhhachi/giphy.gif?cid=ecf05e47iywgaoi6dvvzc4zy9vchfei3klf3qr1spcbkza45&rid=giphy.gif&ct=g", "There are enough people in the world who are going to write you off. You don't need to do that to yourself.");
        quotesRepo.save(sample7);
        Quotes sample8 = new Quotes(8L, "Dr. Temple Grandin", "https://66.media.tumblr.com/tumblr_m1evr5JPk91qh3ebio4_400.gif", "I am different, not less");
        quotesRepo.save(sample8);
        Quotes sample9 = new Quotes(9L, "Naoki Higashida", "https://animatedlanguagelearning.com/wp-content/uploads/2017/08/Naoki-Higashida-300x200.jpg", "Everybody has a heart that can be touched by something");
        quotesRepo.save(sample9);
        


        // adhdbook
        AdhdBook Book1 = new AdhdBook("ADHD Book1 Title", "ADHD Book1 Author");
        adhdBookRepo.save(Book1);
        AdhdBook Book2 = new AdhdBook("ADHD Book2 Title", "ADHD Book2 Author");
        adhdBookRepo.save(Book2);

        // adhdwebsite
        AdhdWebsite Website1 = new AdhdWebsite("ADHD Website1 Title", "ADHD Website1 url");
        adhdWebsiteRepo.save(Website1);
        AdhdWebsite Website2 = new AdhdWebsite("ADHD Website2 Title", "ADHD Website2 url");
        adhdWebsiteRepo.save(Website2);

        // adhdvideo
        AdhdVideo Video1 = new AdhdVideo("What Exactly is Neurodiversity?",  "https://www.youtube.com/embed/ALJ3CFRRZpo");
        adhdVideoRepo.save(Video1);
        AdhdVideo Video2 = new AdhdVideo("Are ADHDers more Susceptible to Gaslighting?", "https://www.youtube.com/embed/cQH28TVJBVQ");
        adhdVideoRepo.save(Video2);
        AdhdVideo Video3 = new AdhdVideo("How Dopamine Affects Learning and Motivation in ADHD Brains", "https://www.youtube.com/embed/s_P6sNFjLzI");
        adhdVideoRepo.save(Video3);
        AdhdVideo Video4 = new AdhdVideo("What is Executive Function and Why Do We Need it?", "https://www.youtube.com/embed/H4YIHrEu-TU");
        adhdVideoRepo.save(Video4);
        AdhdVideo Video5 = new AdhdVideo("ADHD in Women", "https://www.youtube.com/embed/EMpt40zNK-w");
        adhdVideoRepo.save(Video5);
        AdhdVideo Video6 = new AdhdVideo("Digital Brain Timer for Getting Projects Done!.", "https://www.youtube.com/embed/bWoYiTedxK4");
        adhdVideoRepo.save(Video6);
        AdhdVideo Video7 = new AdhdVideo("What is ADHD?", "https://www.youtube.com/embed/xMWtGozn5jU");
        adhdVideoRepo.save(Video7);
        AdhdVideo Video8 = new AdhdVideo("Why Is It So Hard to Do Something That Should Be Easy?", "https://www.youtube.com/embed/Uo08uS904Rg");
        adhdVideoRepo.save(Video8);
        AdhdVideo Video9 = new AdhdVideo("How to Do Something That Should Be Easy (But...Is...Not)", "https://www.youtube.com/embed/hlObsAeFNVk");
        adhdVideoRepo.save(Video9);
        AdhdVideo Video10 = new AdhdVideo("5 Tips to Make Assertive Communication Easier and More Effective", "https://www.youtube.com/embed/vlwmfiCb-vc");
        adhdVideoRepo.save(Video10);
        AdhdVideo Video11 = new AdhdVideo("To the Teachers of ADHD Students (How Can I Help?)", "https://www.youtube.com/embed/2SFB8BTfAG0");
        adhdVideoRepo.save(Video11);
        AdhdVideo Video12 = new AdhdVideo("Why You Can Focus on Video games (and How to Hack it)", "https://www.youtube.com/embed/R634ytgt7fw");
        adhdVideoRepo.save(Video12);
        AdhdVideo Video13 = new AdhdVideo("ADHD and Friendships: How to Play the Social Game!", "https://www.youtube.com/embed/TvuIZxsD-T8");
        adhdVideoRepo.save(Video13);
        AdhdVideo Video14 = new AdhdVideo("Anger and ADHD: How to Build up Your Brakes", "https://www.youtube.com/embed/9Aq7RNaB0DQ");
        adhdVideoRepo.save(Video14);
        AdhdVideo Video15 = new AdhdVideo("Think You Have ADHD? How to Talk to Your Parents", "https://www.youtube.com/embed/YsREaxPHlZU");
        adhdVideoRepo.save(Video15);
        AdhdVideo Video16 = new AdhdVideo("ADHD in Girls: How to Recognize the Symptoms", "https://www.youtube.com/embed/dmeE3qTJRUw");
        adhdVideoRepo.save(Video16);
        AdhdVideo Video17 = new AdhdVideo("Are You Impulsive? How Meditation can Help", "https://www.youtube.com/embed/8oF0qaDDMQI");
        adhdVideoRepo.save(Video17);
        AdhdVideo Video18 = new AdhdVideo("How to Stop Losing Things", "https://www.youtube.com/embed/8CvODrpfnaA");
        adhdVideoRepo.save(Video18);
        AdhdVideo Video19 = new AdhdVideo("My 10 Favorite Things About having ADHD", "https://www.youtube.com/embed/wFCKa9CVzGU?start=4");
        adhdVideoRepo.save(Video19);
        // adhdtedxvideo
        AdhdTedxVideo Video20 = new AdhdTedxVideo("Failing at Normal: An ADHD Success Story | Jessica McCabe", "https://www.youtube.com/embed/JiwZQNYlGQI");
        adhdTedxVideoRepo.save(Video20);
        AdhdTedxVideo Video21 = new AdhdTedxVideo("ADHD sucks, but not really | Salif Mahamane", "https://www.youtube.com/embed/fWCocjh5aK0");
        adhdTedxVideoRepo.save(Video21);
        AdhdTedxVideo Video22 = new AdhdTedxVideo("I have ADHD, What is Your Superpower? | Negar (Nikki) Amini", "https://www.youtube.com/embed/mEI_39C5E2o?start=4");
        adhdTedxVideoRepo.save(Video22);
        // adhdorganizevideo
        AdhdOrganizeVideo Video23 = new AdhdOrganizeVideo("ADHD Home Hacks - Real-Life Solutions for a Functional Home",  "https://www.youtube.com/embed/5M5IKj2WYWQ?start=4");
        adhdOrganizeVideoRepo.save(Video23);
        AdhdOrganizeVideo Video24 = new AdhdOrganizeVideo("The Four Organizing Styles - Breakdown and FAQs",  "https://www.youtube.com/embed/hYtiQhCJ574?start=4");
        adhdOrganizeVideoRepo.save(Video24);

    }

}
