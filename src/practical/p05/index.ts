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
    const get = await axios.get<Posts>(`https://jsonplaceholder.typicode.com/comments/{id}`);
    const Posts = get.data;

    return {id: Posts.id,body: Posts.body};

  }catch(error){
    return null;
  }
}