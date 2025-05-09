// import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
// import { app } from '../firebase';
// import Post from './Post';
// import { useState } from 'react';

// const [searchTerm, setSearchTerm] = useState('');

// export default async function Feed() {
//     const db = getFirestore(app);
//     const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
//     const querySnapshot = await getDocs(q);
    
//     let data = [];
//     querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() }); // ✅ Fixed syntax
//     });

//     console.log(data);


    
//     return (
//         <div>
//         {data.map((post) => {
//             return <Post key={post.id} post={post} id={post.id} />;
//             })}
//         </div>
//     );
// }


'use client';

import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import { app } from '../firebase';
import Post from './Post';
import { useEffect, useState } from 'react';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const db = getFirestore(app);
      const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(data);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 mb-4 w-full border border-gray-300 rounded-md"
      />

      {filteredPosts.map((post) => (
        <Post key={post.id} post={post} id={post.id} />
      ))}
    </div>
  );
}