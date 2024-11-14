export interface PostPostResponse {
  postId: string;
  title: string;
  content: string;
  createdUserEmail: string;
  createdAtUtc: Date;
  hasBeenModified: boolean;
}
