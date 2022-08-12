package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.wecancodeit.serverside.Models.Quotes;
import org.wecancodeit.serverside.Repositories.QuotesRepository;
import org.wecancodeit.serverside.Models.Adhdbook;
import org.wecancodeit.serverside.Repositories.AdhdbookRepository;
import org.wecancodeit.serverside.Models.Autismbook;
import org.wecancodeit.serverside.Repositories.AutismbookRepository;
import org.wecancodeit.serverside.Models.Adhdwebsite;
import org.wecancodeit.serverside.Repositories.AdhdwebsiteRepository;
import org.wecancodeit.serverside.Models.Autismwebsite;
import org.wecancodeit.serverside.Repositories.AutismwebsiteRepository;
import org.wecancodeit.serverside.Models.Adhdvideo;
import org.wecancodeit.serverside.Repositories.AdhdvideoRepository;
import org.wecancodeit.serverside.Models.Adhdtedxvideo;
import org.wecancodeit.serverside.Repositories.AdhdtedxvideoRepository;
import org.wecancodeit.serverside.Models.Adhdorganizevideo;
import org.wecancodeit.serverside.Repositories.AdhdorganizevideoRepository;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {


    @Resource
    public QuotesRepository quotesRepo;
    @Resource
    public AdhdbookRepository adhdbookRepo;
    @Resource
    public AutismbookRepository autismbookRepo;
    @Resource
    public AdhdwebsiteRepository adhdwebsiteRepo;
    @Resource
    public AutismwebsiteRepository autismwebsiteRepo;
    @Resource
    public AdhdvideoRepository adhdvideoRepo;
    @Resource
    public AdhdtedxvideoRepository adhdtedxvideoRepo;
    @Resource
    public AdhdorganizevideoRepository adhdorganizevideoRepo;

    @Override
    public void run(String... args) throws Exception {

        Quotes sample1 = new Quotes(1L, "Adam Levine", "https://media1.giphy.com/media/woBgfZvByy4lG/giphy.gif?cid=ecf05e472bki6a7egagw8vwh983hywj897xj8lbfp9y8jz37&rid=giphy.gif&ct=g", "Remember that you are not alone. There are others going through the same things.");
        quotesRepo.save(sample1);
        Quotes sample2 = new Quotes(2L, "David Neeleman", "https://www.insidehook.com/wp-content/uploads/2018/06/GettyImages-534957354-1.jpg?fit=1198%2C800", "If someone told me I could be normal or continue to have ADD, I would take the ADD.");
        quotesRepo.save(sample2);
        Quotes sample3 = new Quotes(3l, "Debbie Phelps", "https://i.pinimg.com/originals/1d/30/bd/1d30bd97a2aa59fafa70fc1acec09beb.jpg", "The diagnosis made me want to prove everyone wrong. I knew that, if I collaborated with Michael, he could achieve anything he set his mind to.");
        quotesRepo.save(sample3);
        Quotes sample4 = new Quotes(4L, "Albert Einstein", "https://i.pinimg.com/originals/8e/7b/a5/8e7ba5dcd012d62e105cf82b6cc10ad5.gif", "Logic will get you from A to Z; imagination will get you everywhere.");
        quotesRepo.save(sample4);
        Quotes sample5 = new Quotes(5L, "Howie Mandel", "https://media0.giphy.com/media/3UkLpXdOQObihD4phW/giphy.gif?cid=ecf05e47ujabqhg2qa3fxj1uxvm67ncxgn0ofc664boup2a7&rid=giphy.gif&ct=g", "I didn't let ADHD prevent me from achieving my goals, and neither should you.");
        quotesRepo.save(sample5);
        Quotes sample6 = new Quotes(6L, "Walt(er) Disney", "https://i.pinimg.com/564x/f6/07/57/f607575f66576ac4e4146b07b008625a.jpg", "You're braver than you believe, stronger than you seem, and smarter than you think.");
        quotesRepo.save(sample6);
        Quotes sample7 = new Quotes(7L, "Susan Magdalane Boyle", "https://68.media.tumblr.com/043ec11467e909ba15e5bf34a06b6b29/tumblr_nfyjajVRoI1s8aoo3o1_500.jpg", "There are enough people in the world who are going to write you off. You don't need to do that to yourself.");
        quotesRepo.save(sample7);
        Quotes sample8 = new Quotes(8L, "Dr. Temple Grandin", "https://66.media.tumblr.com/tumblr_m1evr5JPk91qh3ebio4_400.gif", "I am different, not less");
        quotesRepo.save(sample8);
        Quotes sample9 = new Quotes(9L, "Naoki Higashida", "https://animatedlanguagelearning.com/wp-content/uploads/2017/08/Naoki-Higashida-300x200.jpg", "Everybody has a heart that can be touched by something");
        quotesRepo.save(sample9);


        // adhdbook
        Adhdbook Book1 = new Adhdbook(10L,"ADHD Book1 Title", "ADHD Book1 Author");
        adhdbookRepo.save(Book1);
        Adhdbook Book2 = new Adhdbook(11L,"ADHD Book2 Title", "ADHD Book2 Author");
        adhdbookRepo.save(Book2);
        // autismbook
        Autismbook Book3 = new Autismbook(20L,"Autism Book3 Title", "Autism Book3 Author");
        autismbookRepo.save(Book3);
        Autismbook Book4 = new Autismbook(21L,"Autism Book4 Title", "Autism Book4 Author");
        autismbookRepo.save(Book4);

        // adhdwebsite
        Adhdwebsite Website1 = new Adhdwebsite(30L,"ADHD Website1 Title", "ADHD Website1 url");
        adhdwebsiteRepo.save(Website1);
        Adhdwebsite Website2 = new Adhdwebsite(31L,"ADHD Website2 Title", "ADHD Website2 url");
        adhdwebsiteRepo.save(Website2);
        // autismwebsite
        Autismwebsite Website3 = new Autismwebsite(30L,"ADHD Website1 Title", "ADHD Website1 url");
        autismwebsiteRepo.save(Website3);
        Autismwebsite Website4 = new Autismwebsite(31L,"ADHD Website2 Title", "ADHD Website2 url");
        autismwebsiteRepo.save(Website4);

        // adhdvideo
        Adhdvideo Video1 = new Adhdvideo(100L,"What Exactly is Neurodiversity?", "https://www.youtube.com/embed/ALJ3CFRRZpo");
        adhdvideoRepo.save(Video1);
//        Adhdvideo Video2 = new Adhdvideo(101L,"Are ADHDers more Susceptible to Gaslighting?", "https://www.youtube.com/embed/cQH28TVJBVQ");
//        adhdvideoRepo.save(Video2);
//        Adhdvideo Video3 = new Adhdvideo(102L,"How Dopamine Affects Learning and Motivation in ADHD Brains", "https://www.youtube.com/embed/s_P6sNFjLzI");
//        adhdvideoRepo.save(Video3);
//        Adhdvideo Video4 = new Adhdvideo(103L,"What is Executive Function and Why Do We Need it?", "https://www.youtube.com/embed/H4YIHrEu-TU");
//        adhdvideoRepo.save(Video4);
//        Adhdvideo Video5 = new Adhdvideo(104L,"ADHD in Women", "https://www.youtube.com/embed/EMpt40zNK-w");
//        adhdvideoRepo.save(Video5);
//        Adhdvideo Video6 = new Adhdvideo(105L,"Digital Brain Timer for Getting Projects Done!.", "https://www.youtube.com/embed/bWoYiTedxK4");
//        adhdvideoRepo.save(Video6);
        Adhdvideo Video7 = new Adhdvideo(106L,"What is ADHD?", "https://www.youtube.com/embed/xMWtGozn5jU");
        adhdvideoRepo.save(Video7);
//        Adhdvideo Video8 = new Adhdvideo(107L,"Why Is It So Hard to Do Something That Should Be Easy?", "https://www.youtube.com/embed/Uo08uS904Rg");
//        adhdvideoRepo.save(Video8);
//        Adhdvideo Video9 = new Adhdvideo(108L,"How to Do Something That Should Be Easy (But...Is...Not)", "https://www.youtube.com/embed/hlObsAeFNVk");
//        adhdvideoRepo.save(Video9);
//        Adhdvideo Video10 = new Adhdvideo(109L,"5 Tips to Make Assertive Communication Easier and More Effective", "https://www.youtube.com/embed/vlwmfiCb-vc");
//        adhdvideoRepo.save(Video10);
//        Adhdvideo Video11 = new Adhdvideo(110L,"To the Teachers of ADHD Students (How Can I Help?)", "https://www.youtube.com/embed/2SFB8BTfAG0");
//        adhdvideoRepo.save(Video11);
//        Adhdvideo Video12 = new Adhdvideo(111L,"Why You Can Focus on Video games (and How to Hack it)", "https://www.youtube.com/embed/R634ytgt7fw");
//        adhdvideoRepo.save(Video12);
//        Adhdvideo Video13 = new Adhdvideo(113L,"ADHD and Friendships: How to Play the Social Game!", "https://www.youtube.com/embed/TvuIZxsD-T8");
//        adhdvideoRepo.save(Video13);
//        Adhdvideo Video14 = new Adhdvideo(114L,"Anger and ADHD: How to Build up Your Brakes", "https://www.youtube.com/embed/9Aq7RNaB0DQ");
//        adhdvideoRepo.save(Video14);
//        Adhdvideo Video15 = new Adhdvideo(115L,"Think You Have ADHD? How to Talk to Your Parents", "https://www.youtube.com/embed/YsREaxPHlZU");
//        adhdvideoRepo.save(Video15);
//        Adhdvideo Video16 = new Adhdvideo(116L,"ADHD in Girls: How to Recognize the Symptoms", "https://www.youtube.com/embed/dmeE3qTJRUw");
//        adhdvideoRepo.save(Video16);
//        Adhdvideo Video17 = new Adhdvideo(117L,"Are You Impulsive? How Meditation can Help", "https://www.youtube.com/embed/8oF0qaDDMQI");
//        adhdvideoRepo.save(Video17);
//        Adhdvideo Video18 = new Adhdvideo(118L,"How to Stop Losing Things", "https://www.youtube.com/embed/8CvODrpfnaA");
//        adhdvideoRepo.save(Video18);
        Adhdvideo Video19 = new Adhdvideo(119L,"My 10 Favorite Things About having ADHD", "https://www.youtube.com/embed/wFCKa9CVzGU?start=4");
        adhdvideoRepo.save(Video19);
        // adhdtedxvideo
        Adhdtedxvideo Video20 = new Adhdtedxvideo(120L,"Failing at Normal: An ADHD Success Story | Jessica McCabe", "https://www.youtube.com/embed/JiwZQNYlGQI");
        adhdtedxvideoRepo.save(Video20);
        Adhdtedxvideo Video21 = new Adhdtedxvideo(121L,"ADHD sucks, but not really | Salif Mahamane", "https://www.youtube.com/embed/fWCocjh5aK0");
        adhdtedxvideoRepo.save(Video21);
        Adhdtedxvideo Video22 = new Adhdtedxvideo(122L,"I have ADHD, What is Your Superpower? | Negar (Nikki) Amini", "https://www.youtube.com/embed/mEI_39C5E2o?start=4");
        adhdtedxvideoRepo.save(Video22);
        // adhdorganizevideo
        Adhdorganizevideo Video23 = new Adhdorganizevideo(123L,"ADHD Home Hacks - Real-Life Solutions for a Functional Home", "https://www.youtube.com/embed/5M5IKj2WYWQ?start=4");
        adhdorganizevideoRepo.save(Video23);
        Adhdorganizevideo Video24 = new Adhdorganizevideo(124L,"The Four Organizing Styles - Breakdown and FAQs", "https://www.youtube.com/embed/hYtiQhCJ574?start=4");
        adhdorganizevideoRepo.save(Video24);

    }

}
