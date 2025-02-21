 "use client"

import { PostsItem } from '@/types/news';
import React, { useState } from 'react'
import NewsCard from '../shared/NewsCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import { useGetNewsQuery, useGetSearchNewsQuery } from '@/redux/apiSlice/newsSlice';

const NewsList = () => {
    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>("")
    const {data: news, isLoading, error} =  useGetSearchNewsQuery(search);


  return (
    <div>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5'>
            <SearchBar onSearch={setSearch}/>

            <CategoryFilter onCategoryChange={setCategory}/>
        </div>

        {/* news cards  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-between'>
            {
                news?.map((item: PostsItem) => (
                    <NewsCard key={item?.id} post={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default NewsList