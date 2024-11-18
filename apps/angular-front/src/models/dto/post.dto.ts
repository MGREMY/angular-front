import { CommentDto } from './comment.dto';

export interface PostDto {
  postId: string;
  title: string;
  content: string;
  createdUserEmail: string;
  createdAtUtc: Date;
  hasBeenModified: boolean;
}

export interface ExtendedPostDto extends PostDto {
  comments: CommentDto[];
}
