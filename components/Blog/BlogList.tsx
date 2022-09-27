import Image from 'next/image';
import Link from 'next/link';
import { userAgent } from 'next/server';
import React from 'react';

import { RiHeart2Line, RiChat1Line, RiBookmarkLine } from 'react-icons/ri';

import { Blog } from '../../types';

interface Props {
  blog: Blog;
  showCoverImg?: boolean;
}

const BlogList: React.FC<Props> = ({ blog, showCoverImg = false }: Props) => {
  return (
    <div className='bg-white border-gray-300 rounded-lg border-[1px] overflow-hidden my-2'>
      {showCoverImg && (
        <div className='relative w-full h-[270px]'>
          <Image
            src={
              blog.cover_image ||
              'https://img.freepik.com/free-vector/white-background-with-blue-tech-hexagon_1017-19366.jpg?w=740&t=st=1664303550~exp=1664304150~hmac=3c56f0ee8c04580ee891941b31becdaa57c8f1ec2ae732dce653beb58b8f65bf'
            }
            layout='fill'
            alt={blog.title}
          />
          )
        </div>
      )}
      <div className='flex py-6 px-2 md:p-6'>
        <div className='w-[12%] md:w-[10%] flex justify-end'>
          <div className='relative w-8 h-8 md:w-10 md:h-10 mr-2 overflow-hidden rounded-full border-[1px] shadow-sm'>
            {blog.user.profile_image && (
              <Image
                src={blog.user.profile_image}
                layout='fill'
                alt={blog.user.name}
              />
            )}
          </div>
        </div>
        <div className='w-[88%] md:w-[90%]'>
          <div>
            <h4 className='font-semibold text-sm '>{blog.user.name}</h4>
            <p className='text-xs'>{blog.readable_publish_date}</p>
          </div>
          <div>
            <Link href={`/blogs/${blog.slug}`}>
              <a>
                <h3 className='text-2xl leading-5 font-bold my-5'>
                  {blog.title}
                </h3>
              </a>
            </Link>
          </div>
          <div className='flex flex-wrap space-x-5 mb-7'>
            {blog.tag_list.map((tags, idx) => (
              <p key={tags + idx * Date.now()} className='text-gray-700'>
                <span>#</span>
                {tags}
              </p>
            ))}
          </div>
          <div className='flex justify-between'>
            <div className='flex space-x-7'>
              <div className='flex items-center space-x-2'>
                <span>
                  <RiHeart2Line />
                </span>
                <p>
                  {blog.positive_reactions_count}{' '}
                  <span className='hidden md:inline-block'>reactions</span>
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <span>
                  <RiChat1Line />
                </span>
                <p>
                  {6} <span className='hidden md:inline-block'>comments</span>
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <p>{blog.reading_time_minutes} min read</p>
              <span>
                <RiBookmarkLine />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
