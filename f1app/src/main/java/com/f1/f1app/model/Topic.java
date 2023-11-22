package com.f1.f1app.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="topic")
@Data
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

}