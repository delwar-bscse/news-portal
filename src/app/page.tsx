"use client"

import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { useGetNewsQuery } from "@/redux/apiSlice/newsSlice";

import { PostsItem } from "@/types/news";


const Home: React.FC = () => {
  const { data: news, error, isLoading } = useGetNewsQuery(undefined);
  

  // Handle loading, error, and data
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news</div>;

  return (
    <div className="py-12">
      <Banner />
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            news?.slice(0, 9).map((post: PostsItem) => (
              <NewsCard key={post?.id} post={post} />
            ))
          }
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default Home