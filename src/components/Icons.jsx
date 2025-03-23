// "use client";

// import { HiOutlineChat , HiOutlineHeart , HiOutlineTrash , HiHeart } from "react-icons/hi"
// import { signIn, useSession } from "next-auth/react";
// import { app } from '../firebase';
// import { doc , getFirestore , setDoc ,serverTimestamp, onSnapshot, collection, deleteDoc} from "firebase/firestore";
// import { use, useEffect } from "react";
// import { useState } from "react";


// export default function Icons({ id , uid}) {

//     const db = getFirestore(app);
//     const { data: session } = useSession();
//     const [isLiked, setLiked] = useState(false);
//     const [likes, setLikes] = useState([]);
//     const likePost = async () => {
//         // console.log("Post liked");
//         if(session) {

//             if (isLiked) {
//                 await deleteDoc(doc(db, "posts", id, "likes", session.user.uid), {
//                     username: session.user.username,
//                     timestamp: serverTimestamp(),
//                 });
//             }else{
//                 await setDoc(doc(db, "posts" , id , "likes" ,session.user.uid) , {
//                     username: session.user.username,
//                     timestamp: serverTimestamp(),
//                 });
//             }
//         }
//         else {
//             signIn();
//         }


//     };

//     useEffect(() => {
//         onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {  
//             setLikes(snapshot.docs);
//         });
//     }, [db]);   
    
//     useEffect(() => {
//         setLiked(likes.findIndex((like) => like.id === session?.user.uid) !== -1);
//     }
//     , [likes]);


//     const deletePost = async () => {
//         if(window.confirm("Are you sure you want to delete this post?")) {

//             if(session?.user?.uid == uid) {
//                 deleteDoc(doc(db, "posts", id)).then(() => {
//                     console.log("Document successfully deleted!");
//                     window.location.reload();
//                 }
//                 ).catch((error) => {
//                     console.error("Error removing document: ", error);
//                 });
//             }
//             else {
//                 alert("You can only delete your own posts");
//             }
            
//         }
//     }




//   return (
//     <div className="flex justify-start gap-5 p-2 text-gray-500">
//         <HiOutlineChat className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" />
        
//         <div className="flex items-center">
//         {isLiked ? 
//         (<HiHeart 
//         onClick={likePost}   className="h-8 w-8 cursor-pointer rounded-full transition duration-500 text-red-600 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" />) :
//         (<HiOutlineHeart 
//         onClick={likePost}   className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" />)}
//         {likes.length > 0 && <span className={"text-xs ${isLiked && text-red-600}"}>{likes.length}</span>} 
//         </div>
        
//         {session?.user?.uid === uid && 
//         (<HiOutlineTrash className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" 
//         onClick={deletePost}/> )
//         }
        
//     </div>
//   );
// }




"use client";

import { HiOutlineChat, HiOutlineHeart, HiOutlineTrash, HiHeart, HiOutlinePencil } from "react-icons/hi";
import { signIn, useSession } from "next-auth/react";
import { app } from '../firebase';
import { 
  doc, 
  getFirestore, 
  setDoc,
  serverTimestamp,
  onSnapshot,
  collection,
  deleteDoc 
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

export default function Icons({ id, uid, post }) {
    const db = getFirestore(app);
    const storage = getStorage(app);
    const { data: session } = useSession();
    const [isLiked, setLiked] = useState(false);
    const [likes, setLikes] = useState([]);
    const [isEditing, setEditing] = useState(false);
    const [editedMessage, setEditedMessage] = useState(post?.text || "");
    const [editedImage, setEditedImage] = useState(null);
    const [currentImage, setCurrentImage] = useState(post?.image || null);

    // Like functionality (existing)
    const likePost = async () => {
        if (session) {
            if (isLiked) {
                await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
            } else {
                await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
                    username: session.user.username,
                    timestamp: serverTimestamp(),
                });
            }
        } else {
            signIn();
        }
    };

    // Edit functionality (new)
    // const updatePost = async () => {
    //     if (!session || session.user.uid !== uid) return;

    //     try {
    //         let imageUrl = currentImage;
            
    //         if (editedImage) {
    //             const storageRef = ref(storage, `posts/${id}/${editedImage.name}`);
    //             await uploadBytes(storageRef, editedImage);
    //             imageUrl = await getDownloadURL(storageRef);
    //         }

    //         await setDoc(doc(db, "posts", id), {
    //             text: editedMessage,
    //             image: imageUrl,
    //             edited: true,
    //             timestamp: serverTimestamp()
    //         }, { merge: true });

    //         setCurrentImage(imageUrl);
    //         setEditing(false);
    //         setEditedImage(null);
    //     } catch (error) {
    //         console.error("Error updating post:", error);
    //     }
    // };

    const updatePost = async () => {
        if (!session || session.user.uid !== uid) return;
    
        try {
            let imageUrl = currentImage;
            
            if (editedImage) {
                const storageRef = ref(storage, `posts/${id}/${editedImage.name}`);
                await uploadBytes(storageRef, editedImage);
                imageUrl = await getDownloadURL(storageRef);
            }
    
            await setDoc(doc(db, "posts", id), {
                text: editedMessage,
                image: imageUrl,
                edited: true,
                timestamp: serverTimestamp()
            }, { merge: true });
    
            setCurrentImage(imageUrl);
            setEditing(false);
            setEditedImage(null);
    
            // Reload page after successful update
            window.location.reload();
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    // Cancel edit (new)
    const cancelEdit = () => {
        setEditing(false);
        setEditedMessage(post.text);
        setCurrentImage(post.image);
        setEditedImage(null);
    };

    // Existing effects for likes
    useEffect(() => {
        const postRef = doc(db, "posts", id); // Reference the post document
        const likesRef = collection(postRef, "likes"); // Reference the "likes" subcollection of that post
    
        const unsubscribe = onSnapshot(likesRef, (snapshot) => {  
            setLikes(snapshot.docs);
        });
    
        return unsubscribe;
    }, [db, id]);

    useEffect(() => {
        setLiked(likes.findIndex((like) => like.id === session?.user?.uid) !== -1);
    }, [likes, session]);

    // Delete functionality (existing)
    const deletePost = async () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            if (session?.user?.uid === uid) {
                try {
                    await deleteDoc(doc(db, "posts", id));
                    window.location.reload();
                } catch (error) {
                    console.error("Error deleting post:", error);
                }
            }
        }
    };



    return (
        <div className="flex justify-start gap-5 p-2 text-gray-500">
            {isEditing ? (
                <div className="w-full space-y-3">
                    <input
                        type="text"
                        value={editedMessage}
                        onChange={(e) => setEditedMessage(e.target.value)}
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <div className="flex items-center gap-3">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setEditedImage(e.target.files[0])}
                            className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                        />
                        {currentImage && (
                            <img 
                                src={currentImage} 
                                className="max-h-32 object-cover rounded"
                                alt="Current content" 
                            />
                        )}
                    </div>
                    
                    <div className="flex gap-2">
                        <button 
                            onClick={updatePost}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Save Changes
                        </button>
                        <button 
                            onClick={cancelEdit}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <HiOutlineChat className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" />
                    
                    <div className="flex items-center">
                        {isLiked ? (
                            <HiHeart 
                                onClick={likePost}   
                                className="h-8 w-8 cursor-pointer rounded-full transition duration-500 text-red-600 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" 
                            />
                        ) : (
                            <HiOutlineHeart 
                                onClick={likePost}   
                                className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-sky-500 hover:bg-sky-100" 
                            />
                        )}
                        {likes.length > 0 && (
                            <span className={`text-xs ${isLiked && 'text-red-600'}`}>
                                {likes.length}
                            </span>
                        )} 
                    </div>
                    
                    {session?.user?.uid === uid && (
                        <div className="flex gap-2">
                            <HiOutlinePencil 
                                onClick={() => setEditing(true)}
                                className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-green-500 hover:bg-green-100"
                            />
                            <HiOutlineTrash 
                                onClick={deletePost}
                                className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2 hover:text-red-500 hover:bg-red-100"
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}