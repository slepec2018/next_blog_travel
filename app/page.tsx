import CtaCard from "@/components/elements/CtaCard";
import { PaddingContainer } from "@/components/layout/PaddingContainer";
import PostCard from "@/components/posts/PostCard";
import PostsList from "@/components/posts/PostsList";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home() {
  return (
    <PaddingContainer>
      <main
        className="h-auto space-y-10"
      >
        <PostCard
          post={DUMMY_POSTS[0]}
        />
        <PostsList
          posts={DUMMY_POSTS.filter((post, index) => index > 0 && index < 3)}
        />
        <CtaCard />
        <PostCard
          post={DUMMY_POSTS[3]}
          reverse
        />
        <PostsList
          posts={DUMMY_POSTS.filter((post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
