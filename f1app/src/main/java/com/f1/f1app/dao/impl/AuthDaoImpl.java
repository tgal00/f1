package com.f1.f1app.dao.impl;

import com.f1.f1app.dao.AuthDao;
import com.f1.f1app.model.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class AuthDaoImpl implements AuthDao {

    @Autowired
    EntityManager em;

    @Override
    public User login(String username, String pasword) {
        return null;
    }

    public User getUser(String username){
        Query query = em.createQuery("SELECT u from User u where u.username = :username", User.class);
        query.setParameter("username", username);

        try{
            User user = (User) query.getSingleResult();
            return user;
        }catch(Exception e){
            return null;
        }
    }

    @Transactional
    public boolean register(User user){
        em.persist(user);

        return true;
    }
}
