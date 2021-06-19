package com.example.testingbackend.onStartup;

import com.example.testingbackend.domain.Person;
import com.example.testingbackend.services.PersonService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Slf4j
//@Component
public class BootstrapData implements CommandLineRunner {

    @Autowired
    public BootstrapData(PersonService personService) {
        this.personService = personService;
    }

    private final PersonService personService;

    @Override
    public void run(String... args) throws Exception {
        Person person1 = new Person("Diraj");
        Person person2 = new Person("Dipika");

        log.debug("Saving person 1 and 2...");
        personService.save(person1);
        personService.save(person2);
        log.debug("Person 1 and 2 successfully saved.");
    }
}
