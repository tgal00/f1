import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Topic } from "../model/topic.model";
import { Discussion } from "../model/discussion.model";

@Injectable({
  providedIn: 'root'
})
export class ForumService {


  constructor(protected http: HttpClient){}

  public getAllTopics() {
    return this.http.get<{ success: boolean, topics: Topic[] }>("http://localhost:8080/forum/getAll");
  }

  public addNewTopic(topic: string) {
    return this.http.post<{ success: boolean, topic: Topic }>(`http://localhost:8080/forum/newTopic?newTopic=${topic}`, {}
     );
  }

  public getDiscussionForTopic(topicId: number) {
    return this.http.get<{ success: boolean, discussions: Discussion[] }>(`http://localhost:8080/forum/getDiscussionForTopic/${topicId}`);
  }

  public updateComment(comment: Discussion) {
    return this.http.post<{ success: boolean, discussion: Discussion }>(`http://localhost:8080/forum/updateDiscussion`, {discussionId: comment.id, newComment: comment.comment});
  }

  public deleteComment(commentId: number) {
    return this.http.delete<{ success: boolean }>(`http://localhost:8080/forum/deleteComment/${commentId}`);
  }

  public addNewDiscussion(discussion: Discussion) {
    return this.http.post<{ success: boolean, newDiscussion: Discussion }>(`http://localhost:8080/forum/addNew`, {...discussion});
  }



}