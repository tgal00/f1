package com.f1.f1app.dao;

import com.f1.f1app.model.Discussion;
import com.f1.f1app.model.Topic;

import java.util.List;

public interface ForumDao {

    public List<Topic> getAll();
    public Topic addNew(String topic);

    public List<Discussion> getDiscussionForTopic(Long topicId);

    public Discussion updateDiscussion(Long discussionId, String newComment);

    public boolean deleteComment(Long id);

    public Discussion addNewDiscussion(Discussion d);
}
