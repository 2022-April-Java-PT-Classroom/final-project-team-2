package org.wecancodeit.serverside;

import org.springframework.boot.CommandLineRunner;
import org.wecancodeit.serverside.Models.Qoutes;
import org.wecancodeit.serverside.Repositories.QoutesRepository;

import javax.annotation.Resource;

public class Populator implements CommandLineRunner {
    @Resource
    public QoutesRepository qoutesRepo;

    @Override
    public void run(String... args) throws Exception {
        Qoutes sample1 = new Qoutes(1L, "Gian Ramirez", "B* you lyin");
        Qoutes sample2 = new Qoutes(2L, "Victor Grullon", "this guy lol");
        Qoutes sample3 = new Qoutes(3l, "Serena Howard", "Migraine patch activated");
        Qoutes sample4 = new Qoutes(4L, "Zaylet Feliciano", "frrr");
        Qoutes sample5 = new Qoutes(5L, "Noelle Gisewhite", "Fight me Serena");
    }
}
