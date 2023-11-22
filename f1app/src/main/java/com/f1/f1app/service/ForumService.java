package com.f1.f1app.service;

import com.f1.f1app.dao.impl.ForumDaoImpl;
import com.f1.f1app.model.Discussion;
import com.f1.f1app.model.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForumService {

    @Autowired
    private ForumDaoImpl forumDao;

    public List<Topic> getAll(){
        return this.forumDao.getAll();
    }

    public Topic addNew(String topic){
        return this.forumDao.addNew(topic);
    }

    public List<Discussion> getDiscussionForTopic(Long topicId){
        return this.forumDao.getDiscussionForTopic(topicId);
    }

    public Discussion updateDiscussion(Long discussionId, String newComment){
        return this.forumDao.updateDiscussion(discussionId, newComment);
    }

    public boolean deleteComment(Long id){
        return this.forumDao.deleteComment(id);
    }

    public Discussion addNewDiscussion(Discussion d){
        return this.forumDao.addNewDiscussion(d);
    }
}
