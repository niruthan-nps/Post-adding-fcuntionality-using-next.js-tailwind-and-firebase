// import Link from 'next/link';
// import { HiDotsHorizontal } from 'react-icons/hi';
// import Icons from './Icons';
// // import LikeSection from './LikeSection';
// // import CommentSection from './CommentSection';

// export default function Post({ post, id }) {
//   return (
//     <div className='flex p-3 border-gray-200 hover:bg-gray-100'>
//       <img
//         src={post?.profileImg}
//         alt='profile'
//         className='h-11 w-11 rounded-full mr-4'
//       />
//       <div className="flex-1">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-1 whitespace-nowrap">
//             <h4 className="font-bold text-sm truncate">{post?.name}</h4>
//             <span className="text-xs truncate">
//               @{post?.username}
//             </span>
//           </div>
//           <HiDotsHorizontal className="text-sm" />
//         </div>
//         <Link href={`/post/${id}`}>
//           <p className="text-gray-800 text-sm my-3">{post?.text}</p>
//         </Link>
//         <Link href={`/post/${id}`}>
//           <img src={post?.image} className="rounded-2xl mr-2" />
//         </Link>
//         <Icons id={id} uid={post.uid}/>
//       </div>
//     </div> // <- this was missing
//   );
// }




import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
import Icons from './Icons';

export default function Post({ post, id }) {
  // Convert Firestore timestamp to a simple Date object or Unix timestamp
  const timestamp = post?.timestamp ? post.timestamp.seconds * 1000 + post.timestamp.nanoseconds / 1000000 : null;

  // Create a new post object with the converted timestamp
  const postData = {
    ...post,
    timestamp, // or `new Date(timestamp)` if you prefer Date objects
  };

  return (
    <div className='flex p-3 border-gray-200 hover:bg-gray-50 transition-colors'>
      <img
        src={post?.profileImg}
        alt='profile'
        className='h-11 w-11 rounded-full mr-4'
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-sm truncate">{post?.name}</h4>
            <span className="text-xs truncate text-gray-500">
              @{post?.username}
            </span>
          </div>
          <HiDotsHorizontal className="text-sm text-gray-500" />
        </div>

        <div className="my-3">
          <p className="text-gray-800 text-sm">{post?.text}</p>
        </div>

        {post?.image && (
          <Link href={`/post/${id}`}>
            <img 
              src={post.image} 
              className="rounded-2xl mr-2 max-h-60 w-full object-cover" 
              alt="Post content" 
            />
          </Link>
        )}

        <Icons id={id} uid={post.uid} post={postData} />
      </div>
    </div>
  );
}