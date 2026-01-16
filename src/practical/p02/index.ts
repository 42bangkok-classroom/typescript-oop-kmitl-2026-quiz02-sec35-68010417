import axios from "axios";
import { title } from "node:process";

interface in_posts{
  userId:number;
  id:number;
  title:string;
}

interface  out_posts{
  id:number;
  title:string;
}

export async function getPostsByUser(userId:number):Promise<out_posts[]> {
  try{
    const get = await axios.get<in_posts[]>(`https://jsonplaceholder.typicode.com/posts`);
    const in_posts = get.data;

    const result = in_posts.filter(p => userId === p.userId).map(p => (({id: p.id,title: p.title})));
    return result;

  }catch(error){
    throw new Error("error")
  }
}
