package com.f1.f1app.dao;

import com.f1.f1app.model.User;

public interface AuthDao {

    public User login(String username, String pasword);

    public boolean register(User user);
}
