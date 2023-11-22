import { Component } from '@angular/core';
import { timestamp } from 'rxjs';
import { Discussion } from 'src/app/core/model/discussion.model';
import { Topic } from 'src/app/core/model/topic.model';
import { User } from 'src/app/core/model/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ForumService } from 'src/app/core/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['../../../assets/styles/forum.component.scss']
})
export class ForumComponent {


  public newTopic: string = "";

  public topics: Topic[] = [];

  public user: User | null;

  public discussions: Discussion[];

  public selectedDiscussion: Discussion | null = null;
  public selectedTopic: Topic;
  public newComment: string = "";

  constructor(protected authService: AuthService, protected forumService: ForumService) {
    this.user = this.authService.getUser();
    this.forumService.getAllTopics().subscribe(res => {
      if (res.success) {
        this.topics = res.topics;
      }
    })
  }

  public onNewTopic() {
    this.forumService.addNewTopic(this.newTopic).subscribe(res => {
      if (res.success) {
        this.topics.push(res.topic);
        this.newTopic = "";
      }
    })
  }

  public getDiscussionForTopic(topicId: number) {
    this.forumService.getDiscussionForTopic(topicId).subscribe(res => {
      if (res.success) {
        this.discussions = res.discussions;
      }
    })
  };


  public onToggleEdit(discussion: Discussion) {
    this.selectedDiscussion = discussion;
  }

  public onEditComment(){
    console.log(this.selectedDiscussion);
    this.forumService.updateComment(this.selectedDiscussion!).subscribe(res => {
      if(res.success){
        this.discussions.splice(this.discussions.findIndex(d => d.id == this.selectedDiscussion?.id), 1, res.discussion);
        this.selectedDiscussion = null;
      }
    })
  }

  public onDeleteComment(id: number){
    this.forumService.deleteComment(id).subscribe(res => {
      if(res.success){
        this.discussions = this.discussions.filter(d => d.id != id);
      }
    })
  }

  onNewComment(){
    let tempComment: Discussion = {
      comment : this.newComment,
      id : null!,
      time : new Date(),
      topicId : this.selectedTopic.id,
      user: this.user!

    } 
    this.forumService.addNewDiscussion(tempComment).subscribe(res => {
      if(res.success) {
        this.discussions.push(res.newDiscussion);
        this.newComment = "";
      }
    })
  }


}
