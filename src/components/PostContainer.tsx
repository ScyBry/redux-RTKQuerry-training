import { postAPI } from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";
import { IPost } from "../models/IPost.ts";

export default function PostContainer() {
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(5);

  const [createPost, {}] = postAPI.useCreatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  return (
    <div>
      <button onClick={handleCreate}></button>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка</h1>}
      {posts &&
        posts.map((post) => <PostItem key={post.id} post={post}></PostItem>)}
    </div>
  );
}
