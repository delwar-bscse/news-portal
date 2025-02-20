

  export interface PostsItem {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  export interface postsCardProps {
    post: PostsItem
  }

  export interface NewsItem {
    _id: string;
    title: string;
    description: string;
    snippet: string;
    url: string;
    imageUrl: any;
    language: string;
    published_at: string;
    source: string;
    categories: string[]
  }

  export interface NewsCardProps {
    item: NewsItem
  }