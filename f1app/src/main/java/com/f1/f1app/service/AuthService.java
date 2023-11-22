package com.f1.f1app.service;

import com.f1.f1app.dao.impl.AuthDaoImpl;
import com.f1.f1app.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    AuthDaoImpl authDao;

    public User loginUser(String username, String password) {

        User user = authDao.getUser(username);

        if(user != null)  if(BCrypt.checkpw(password, user.getPassword())) return user;

        return null;
    }

    public boolean registerUser(String username, String password) {

        User user = authDao.getUser(username);
        if(user != null) return false;

        User newUser = new User();

        newUser.setPassword(BCrypt.hashpw(password, BCrypt.gensalt()));
        newUser.setUsername(username);
        newUser.setUserStatus(0);

        return authDao.register(newUser);

    }
}
