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




// import Link from 'next/link';
// import { HiDotsHorizontal } from 'react-icons/hi';
// import Icons from './Icons';

// export default function Post({ post, id }) {
//   // Convert Firestore timestamp to a simple Date object or Unix timestamp
//   const timestamp = post?.timestamp ? post.timestamp.seconds * 1000 + post.timestamp.nanoseconds / 1000000 : null;

//   // Create a new post object with the converted timestamp
//   const postData = {
//     ...post,
//     timestamp, // or `new Date(timestamp)` if you prefer Date objects
//   };

//   return (
//     <div className='flex p-3 border-gray-200 hover:bg-gray-50 transition-colors'>
//       <img
//         src={post?.profileImg}
//         alt='profile'
//         className='h-11 w-11 rounded-full mr-4'
//       />
//       <div className="flex-1">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-1 whitespace-nowrap">
//             <h4 className="font-bold text-sm truncate">{post?.name}</h4>
//             <span className="text-xs truncate text-gray-500">
//               @{post?.username}
//             </span>
//           </div>
//           <HiDotsHorizontal className="text-sm text-gray-500" />
//         </div>

//         <div className="my-3">
//           <p className="text-gray-800 text-sm">{post?.text}</p>
//         </div>

//         {post?.image && (
//           <Link href={`/post/${id}`}>
//             <img 
//               src={post.image} 
//               className="rounded-2xl mr-2 max-h-60 w-full object-cover" 
//               alt="Post content" 
//             />
//           </Link>
//         )}

//         <Icons id={id} uid={post.uid} post={postData} />
//       </div>
//     </div>
//   );
// }


// 'use client';

// import Link from 'next/link';
// import { HiDotsHorizontal } from 'react-icons/hi';
// import Icons from './Icons';
// import html2pdf from 'html2pdf.js';
// import { useRef } from 'react';

// export default function Post({ post, id }) {
//   const postRef = useRef();

//   // Convert Firestore timestamp to readable format
//   const timestamp = post?.timestamp ? post.timestamp.seconds * 1000 + post.timestamp.nanoseconds / 1000000 : null;

//   const postData = {
//     ...post,
//     timestamp,
//   };

//   const handleDownloadPDF = () => {
//     const element = postRef.current;
//     const opt = {
//       margin:       0.5,
//       filename:     `${post?.username}_post_${id}.pdf`,
//       image:        { type: 'jpeg', quality: 0.98 },
//       html2canvas:  { scale: 2 },
//       jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };
//     html2pdf().set(opt).from(element).save();
//   };

//   return (
//     <div className='flex p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors'>

//       <img
//         src={post?.profileImg}
//         alt='profile'
//         className='h-11 w-11 rounded-full mr-4'
//       />

//       <div className="flex-1" ref={postRef}>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-1 whitespace-nowrap">
//             <h4 className="font-bold text-sm truncate">{post?.name}</h4>
//             <span className="text-xs truncate text-gray-500">
//               @{post?.username}
//             </span>
//           </div>
//           <HiDotsHorizontal className="text-sm text-gray-500" />
//         </div>

//         <div className="my-3">
//           <p className="text-gray-800 text-sm">{post?.text}</p>
//         </div>

//         {post?.image && (
//           <Link href={`/post/${id}`}>
//             <img 
//               src={post.image} 
//               className="rounded-2xl mr-2 max-h-60 w-full object-cover" 
//               alt="Post content" 
//             />
//           </Link>
//         )}
//       </div>

//       <div className="ml-4 flex flex-col justify-start">
//         <button
//           onClick={handleDownloadPDF}
//           className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs hover:bg-blue-600 transition-all"
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import Link from 'next/link';
// import { HiDotsHorizontal } from 'react-icons/hi';
// import Icons from './Icons';
// import { useRef } from 'react';

// export default function Post({ post, id }) {
//   const postRef = useRef();

//   // Convert Firestore timestamp to readable format
//   const timestamp = post?.timestamp ? post.timestamp.seconds * 1000 + post.timestamp.nanoseconds / 1000000 : null;

//   const postData = {
//     ...post,
//     timestamp,
//   };

//   const handleDownloadPDF = async () => {
//     const html2pdf = (await import('html2pdf.js')).default;

//     const element = postRef.current;
//     const opt = {
//       margin: 0.5,
//       filename: `${post?.username}_post_${id}.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//     };

//     html2pdf().set(opt).from(element).save();
//   };

//   return (
//     <div className='flex p-3 border-b border-gray-200 hover:bg-gray-50 transition-colors'>
//       <img
//         src={post?.profileImg}
//         alt='profile'
//         className='h-11 w-11 rounded-full mr-4'
//       />

//       <div className="flex-1" ref={postRef}>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-1 whitespace-nowrap">
//             <h4 className="font-bold text-sm truncate">{post?.name}</h4>
//             <span className="text-xs truncate text-gray-500">
//               @{post?.username}
//             </span>
//           </div>
//           <HiDotsHorizontal className="text-sm text-gray-500" />
//         </div>

//         <div className="my-3">
//           <p className="text-gray-800 text-sm">{post?.text}</p>
//         </div>

//         {post?.image && (
//           <Link href={`/post/${id}`}>
//             <img
//               src={post.image}
//               className="rounded-2xl mr-2 max-h-60 w-full object-cover"
//               alt="Post content"
//             />
//           </Link>
//         )}
//       </div>

//       <div className="ml-4 flex flex-col justify-start">
//         <button
//           onClick={handleDownloadPDF}
//           className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs hover:bg-blue-600 transition-all"
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// }



'use client';

import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
import Icons from './Icons';
import { useRef } from 'react';

export default function Post({ post, id }) {
  if (!post) return null;
  const postRef = useRef();

  const timestamp = post?.timestamp
    ? post.timestamp.seconds * 1000 + post.timestamp.nanoseconds / 1000000
    : null;

  const postData = {
    ...post,
    timestamp,
  };

  const handleDownloadPDF = async () => {
    const html2pdf = (await import('html2pdf.js')).default;

    const element = postRef.current;

    const opt = {
      margin: 0.5,
      filename: `post-${id}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div
      className='flex p-3 border-gray-200 hover:bg-gray-50 transition-colors'
      ref={postRef}
    >
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

        <button
          onClick={handleDownloadPDF}
          className="mt-3 text-sm text-blue-500 hover:underline"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}