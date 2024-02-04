import { PaddingContainer } from "@/components/layout/PaddingContainer";
import { DUMMY_POSTS } from "@/DUMMY_DATA";
import PostHero from "@/components/posts/PostHero";
import { notFound } from "next/navigation";
import { SocialLink } from "@/components/elements/SocialLink";
import PostBody from "@/components/posts/PostBody";
import CtaCard from "@/components/elements/CtaCard";

const Page = ({ params }: { params: { slug: string } }) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PaddingContainer>
      <div
        className="space-y-10"
      >
        <PostHero
          post={post}
        />
        <div
          className="flex flex-col md:flex-row gap-10"
        >
          <div
            className="relative"
          >
            <div
              className="sticky top-20 flex items-center md:flex-col flex-col gap-5"
            >
              <div
                className="font-medium md:hidden"
              >
                Share this content:
              </div>
              <SocialLink
                platform="facebook"
                link="https://www.facebook.com"
                isShareURL
              />
              <SocialLink
                platform="twitter"
                link="https://www.twitter.com"
                isShareURL
              />
              <SocialLink
                platform="linkedin"
                link="https://www.linkedin.com"
                isShareURL
              />
            </div>
          </div>
          <PostBody
            body={post.body}
          />
        </div>
        <CtaCard />
      </div>
    </PaddingContainer>
  )
}

export default Page;

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    }
  })
}