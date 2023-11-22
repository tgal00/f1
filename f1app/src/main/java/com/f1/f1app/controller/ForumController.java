package com.f1.f1app.controller;

import com.f1.f1app.model.Discussion;
import com.f1.f1app.model.Topic;
import com.f1.f1app.model.User;
import com.f1.f1app.service.AuthService;
import com.f1.f1app.service.ForumService;
import jakarta.transaction.Transactional;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/forum")
public class ForumController {

    @Autowired
    private ForumService forumService;

    @GetMapping(value = "/getAll", produces = "application/json")
    public ResponseEntity<Map<String, Object>> getAll() {

        Map<String, Object> res = new HashMap<>();

        List<Topic> allTopics = forumService.getAll();

        res.put("success",true);
        res.put("topics",allTopics);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @Transactional
    @PostMapping(value = "/newTopic", produces = "application/json")
    public ResponseEntity<Map<String, Object>> addTopic(@RequestParam String newTopic) {

        Map<String, Object> res = new HashMap<>();

        Topic topic = forumService.addNew(newTopic);

        res.put("success",true);
        res.put("topic",topic);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping(value = "/getDiscussionForTopic/{topicId}", produces = "application/json")
    public ResponseEntity<Map<String, Object>> getDiscussions(@PathVariable String topicId) {

        Map<String, Object> res = new HashMap<>();

        List<Discussion> discussions = this.forumService.getDiscussionForTopic(Long.valueOf(topicId));

        res.put("success", true);
        res.put("discussions", discussions);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping(value = "/updateDiscussion", produces = "application/json")
    public ResponseEntity<Map<String, Object>> updateDiscussion(@RequestBody DiscussionDTO newDiscussion) {

        Map<String, Object> res = new HashMap<>();

        Discussion discussion = this.forumService.updateDiscussion(newDiscussion.discussionId, newDiscussion.getNewComment());

        res.put("success", true);
        res.put("discussion", discussion);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteComment/{id}", produces = "application/json")
    public ResponseEntity<Map<String, Object>> deleteComment(@PathVariable  Long id) {

        Map<String, Object> res = new HashMap<>();

        res.put("success", this.forumService.deleteComment(id));

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping(value = "/addNew", produces = "application/json")
    public ResponseEntity<Map<String, Object>> addNewDiscusion(@RequestBody Discussion discussion) {

        Map<String, Object> res = new HashMap<>();

        Discussion d = this.forumService.addNewDiscussion(discussion);
        res.put("success",true);
        res.put("newDiscussion", d);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @Data
    public static class DiscussionDTO{
        private Long discussionId;
        private String newComment;
    }

    @Data
    public static class NewDiscussionDTO{
        private String comment;
        private String topicId;
        private String userId;
    }
}
