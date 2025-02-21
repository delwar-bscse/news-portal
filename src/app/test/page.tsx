"use client"
import { useGetNewsQuery } from '@/redux/apiSlice/newsSlice';
import React from 'react'

const page = () => {
    // Call the hook with typed data
    const { data: news, error, isLoading } = useGetNewsQuery(undefined);
    console.log(news);

    // Handle loading, error, and data
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching news</div>;

    return (
        <div>Test Page</div>
    )
}

export default page