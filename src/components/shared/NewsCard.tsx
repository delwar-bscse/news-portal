import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgUrl from '@/assets/banner.jpg'

import { Button } from '../ui/button'
import { postsCardProps } from '@/types/news'

const NewsCard = ({post}:postsCardProps) => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
        <Link href={`/news/${post?.id}`}>
            <Image src={imgUrl} width={500} height={500} alt='news image'
             priority={false} placeholder='blur'
            className='mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200'/>
        </Link>

        <div>
            <h2 className='text-xl font-semibold my-3'>{post?.title.substring(0, 25)}..</h2>
            <p className='mb-4'>{post?.body.substring(0, 55)}...</p>
            <Link href={`/news/${post?.id}`}>
                <Button variant="default" className='dark:bg-gray-800'>Read More</Button>
            </Link>
        </div>
    </div>
  )
}

export default NewsCard