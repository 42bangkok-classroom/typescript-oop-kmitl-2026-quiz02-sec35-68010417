import axios from "axios";

interface Posts{
  id:number;
  title:string;
}

interface EdgePosts{
  id:number;
  title:string;
}

export async function getEdgePosts():Promise<EdgePosts[]> {
try{
  const get = await axios.get<Posts[]>(`https://jsonplaceholder.typicode.com/posts`);
  const result = get.data;

  const firstpost = result[0]
  const lastpost = result[result.length-1]

  return [
    {id: firstpost.id,title: firstpost.title},
    {id: lastpost.id,title: lastpost.title}
  ]

}catch(error){
  throw new Error("error");
}
}
