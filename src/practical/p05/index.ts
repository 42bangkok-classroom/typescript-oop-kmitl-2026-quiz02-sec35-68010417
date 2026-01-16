import axios from "axios";

interface Posts{
  id:number;
  body:string;
}

interface Comment{
  id:number;
  body:string;
}

export async function safeFetchComment (commentId:number):Promise<Comment | null>{
  try{
    if(isNaN(commentId) || commentId<=0 || commentId === null){
      return null;
    }
    const get = await axios.get<Posts>(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    const Posts = get.data;

    const result = {id: Posts.id,body: Posts.body};
    return result;
  }catch(error){
    return null;
  }
}