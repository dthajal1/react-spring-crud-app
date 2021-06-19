package com.example.testingbackend.controller;

import com.example.testingbackend.domain.Person;
import com.example.testingbackend.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
// port 3000 is where our frontend will run and make a request to this API
// without this we will run into cors issues
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping({"/people", "/", ""})
    public List<Person> getPeople() {
        return personService.findAll();
    }

    @PostMapping("/create")
    public Person createPerson(@RequestBody Person person) {
        return personService.save(person);
    }

    @GetMapping("/{id}")
    public Person getPerson(@PathVariable String id) {
        return personService.findById(Long.valueOf(id));
        // need to throw exception if not found?
    }

    @PutMapping("/{id}")
    public Person updatePerson(@PathVariable String id, @RequestBody Person person) {
        Person oldPerson = personService.findById(Long.valueOf(id));
        oldPerson.setName(person.getName());

        Person updatedPerson = personService.save(oldPerson);
        return updatedPerson;
        // need to throw exception?
    }


}
