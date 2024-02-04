import { Post } from "@/types/collection";
import PostCard from "./PostCard";

interface PostsListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

const PostsList = ({ posts, layout = "vertical" }: PostsListProps) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr"
    >
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          layout={layout}
        />
      ))}
    </div>
  )
}

export default PostsList;