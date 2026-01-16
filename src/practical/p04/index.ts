import axios from 'axios';

interface Comment {
  postId: number;
  id: number;
}

type CommentCountByPost = Record<number, number>;

export async function countCommentsByPost(): Promise<CommentCountByPost> {
  try {
    const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
    
    const comments = response.data;

    const commentCount = comments.reduce((acc, comment) => {
      if (comment.postId === null || comment.postId === undefined) {
        return acc;
      }
      if (!acc[comment.postId]) {
        acc[comment.postId] = 0;
      }
      acc[comment.postId]++;
      
      return acc;
    }, {} as CommentCountByPost);

    return commentCount;
  } catch (error) {
    throw new Error('error');
  }
}