package com.f1.f1app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication()
public class F1appApplication {

	public static void main(String[] args) {
		SpringApplication.run(F1appApplication.class, args);
	}

}
