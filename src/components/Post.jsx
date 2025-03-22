import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
// import LikeSection from './LikeSection';
// import CommentSection from './CommentSection';

export default function Post({ post, id }) {
  return (
    <div className='flex p-3 border-gray-200'>
      <img
        src={post?.profileImg}
        alt='profile'
        className='h-11 w-11 rounded-full mr-4'
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-sx truncate">{post?.name}</h4>
            <span className="text-xs truncate">
              @{post?.username}
            </span>
          </div>
          <HiDotsHorizontal className="text-sm" />
        </div>
        <Link href={`/post/${id}`}>
          <p className="text-gray-800 text-sm my-3">{post?.message}</p>
        </Link>
        <Link href={`/post/${id}`}>
          <img src={post?.image} className="rounded-2xl mr-2" />
        </Link>
      </div>
    </div> // <- this was missing
  );
}