package com.f1.f1app.dao.impl;

import com.f1.f1app.dao.ForumDao;
import com.f1.f1app.model.Discussion;
import com.f1.f1app.model.Topic;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public class ForumDaoImpl implements ForumDao {

    @Autowired
    EntityManager em;

    public List<Topic> getAll() {
        Query query = em.createQuery("SELECT t FROM Topic t");
        return query.getResultList();
    }

    @Override
    public Topic addNew(String newTopic) {
        Topic topic = new Topic();
        topic.setName(newTopic);
        em.persist(topic);

        return topic;
    }

    @Override
    public List<Discussion> getDiscussionForTopic(Long topicId) {
        Query query = em.createQuery("SELECT d FROM Discussion d WHERE d.topicId = :topicId", Discussion.class);
        query.setParameter("topicId", topicId);

        return query.getResultList();
    }

    @Override
    @Transactional
    public Discussion updateDiscussion(Long discussionId, String newComment) {

        Discussion old = em.find(Discussion.class, discussionId);
        old.setComment(newComment);

        em.merge(old);
        em.flush();

        return old;
    }

    @Override
    @Transactional
    public boolean deleteComment(Long commentId) {

        Discussion old = em.find(Discussion.class, commentId);
        em.remove(old);
        em.flush();

        return true;
    }

    @Transactional
    @Override
    public Discussion addNewDiscussion(Discussion d) {

        Discussion newDiscussion = new Discussion();
        newDiscussion.setTime(d.getTime());
        newDiscussion.setUser(d.getUser());
        newDiscussion.setComment(d.getComment());
        newDiscussion.setTopicId(d.getTopicId());
        em.persist(newDiscussion);
        em.flush();
        return newDiscussion;
    }
}
