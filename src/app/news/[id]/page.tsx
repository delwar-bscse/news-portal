import { PostsItem } from "@/types/news";
import Image from "next/image";
import img from "@/assets/banner.jpg";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts: PostsItem[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  ).then((res) => res.json());
  return posts.slice(0, 9).map((post) => ({
    id: String(post.id),
  }));
}

const NewsDetailsPage = async ({ params }: { params: { id: string } }) => {
  // Ensure ID is valid
  if (!params?.id) {
    return <p>Error: No ID provided</p>;
  }

  // Convert params.id to a number (API expects a number)
  const postId = Number(params.id);

  // Fetch post details using the post ID
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  ).then((res) => res.json());

  return (
    <section className="py-12">
      <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
        <div>
          <Image
            src={img}
            alt="news details"
            width={800}
            height={450}
            className="rounded-md object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold mb-8 mt-4">{post?.title}</h2>

        {/* Full Description */}
        <p className="mb-4">{post?.body}</p>
        <p className="mb-4">{post?.body}</p>
        <p className="mb-4">{post?.body}</p>
      </article>
    </section>
  );
};

export default NewsDetailsPage;
