import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { PostsItem } from "@/types/news";

const Home = async() => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    cache: 'force-cache'
  });
  const posts = await data.json();
  
  
  return (
    <div className="py-12">
        <Banner/>

        <div className="my-12">
          <h2 className="text-2xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              posts?.slice(0, 6).map((post:PostsItem) => (
                <NewsCard key={post?.id} post={post}/>
              ))
            }
          </div>
        </div>

        <NewsLetter/>
    </div>
  );
}

export default Home