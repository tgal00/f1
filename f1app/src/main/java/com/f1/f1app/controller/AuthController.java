package com.f1.f1app.controller;


import com.f1.f1app.model.User;
import com.f1.f1app.service.AuthService;
import jakarta.persistence.Query;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping(value = "/login", produces = "application/json")
    public ResponseEntity<Map<String, Object>> login(@RequestBody UserLoginDto userData) {

        Map<String, Object> res = new HashMap<>();

        User user = authService.loginUser(userData.getUsername(), userData.getPassword());
        if (user != null) {
            user.setPassword(null);
            res.put("success", true);
            res.put("user", user);
        } else {
            res.put("success", false);
        }

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping(value = "/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody UserLoginDto userData) {

        Map<String, Object> res = new HashMap<>();

        res.put("success", authService.registerUser(userData.getUsername(), userData.getPassword()));

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @Data
    @AllArgsConstructor
    public static class UserLoginDto {
        private String username;
        private String password;
    }
}


