'use client'

import Image from "next/image";
import img from "@/assets/banner.jpg";
import { useGetSingleNewsQuery } from "@/redux/apiSlice/newsSlice";
import { useParams } from "next/navigation";

const NewsDetailsPage = () => {
  const {id} = useParams();

  // Convert params.id to a number (API expects a number)
  const postId: number = Number(id);

  // Fetch post details using the post ID
  const { data: post, isLoading, error } = useGetSingleNewsQuery(postId);

  // Handle loading, error, and data
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news</div>;

  return (
    <section className="py-12">
      <article className="max-w-4xl mx-auto p-6 shadow-md border rounded-lg">
        <div>
          <Image
            src={img}
            alt="news details"
            placeholder="blur"
            width={800}
            height={450} 
            priority={false}             
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
