export interface CommentDto {
  commentId: string;
  postId: string;
  content: string;
  createdUserEmail: string;
  createdAtUtc: Date;
  hasBeenModified: boolean;
}
