package com.example.testingbackend.services;

import com.example.testingbackend.domain.Person;

import java.util.List;

public interface PersonService {

    Person findById(Long id);
    Person save(Person person);
    void deleteById(Long id);
    List<Person> findAll();
}
