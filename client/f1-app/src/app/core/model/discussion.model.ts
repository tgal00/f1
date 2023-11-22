import { User } from "./user.model";

export interface Discussion {
  id: number,
  time: Date,
  user: User,
  topicId: number,
  comment: string
}