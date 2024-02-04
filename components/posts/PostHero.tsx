import { Post } from "@/types/collection"
import Image from "next/image";
import PostContent from "./PostContent";

interface PostHeroProps {
  post: Post;
}

function PostHero({ post }: PostHeroProps) {
  return (
    <div>
      <PostContent
        post={post}
        isPostPage
      />
      <Image
        src={post.image}
        width={1280}
        height={500}
        alt={post.title}
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
      />
    </div>
  )
}

export default PostHero;