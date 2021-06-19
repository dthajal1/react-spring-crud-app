package com.example.testingbackend.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "people")
public class Person {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "full_name")
    private String name;

    public Person(String name) {
        this.name = name;
    }
}
