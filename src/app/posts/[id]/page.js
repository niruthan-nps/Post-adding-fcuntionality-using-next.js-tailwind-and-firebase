// export default function PostPage() {
//     return (
//         <div>PostPage</div>
//     )
// }


import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '@/firebase'; // adjust if needed

export default async function PostPage({ params }) {
  const db = getFirestore(app);
  const docRef = doc(db, 'posts', params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return <div className="p-4 text-red-500">Post not found</div>;
  }

  const post = docSnap.data();

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold">{post.name}</h1>
      <p className="text-gray-600 mb-2">@{post.username}</p>
      <p className="mb-4">{post.text}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="rounded-xl w-full object-cover max-h-96"
        />
      )}
    </div>
  );
}