// "use client";
// import { useSession } from "next-auth/react";
// import { HiOutlinePhotograph } from "react-icons/hi";
// import { useRef } from "react";
// im

// export default function Input() {
//     const { data: session } = useSession();
//     const imagePickRef = useRef(null);
//     const addImagetoPost = (e) => {};

//     if (!session) return null;
//     return (
//     < div className="flex border-b border-gray-200 p-3 space-x-3 w-full">
//         <img src={session.user.image} alt="User Image" className="w-11 h-11 rounded-full cursor-pointer hover:brightness-95" />
//         <div className="w-full divide-y divide-gray-200">
//             <textarea className="w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700" placeholder="Whats's happening" rows="2"></textarea>
//             <div className="flex item-center justify-between pt-2.5">
//                 <HiOutlinePhotograph className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer"/>
//                 <onclick={() => imagePickRef.current.click()} className="bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95">Post</button>
//                 <input type="file" ref={imagePickRef} accept="image/*" onChange={addImageToPost} hidden/>
//                 <button disabled className="bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">Post</button>
//             </div>
//         </div>
        
//         </div>);

// }











// "use client";
// import { useSession } from "next-auth/react";
// import { HiOutlinePhotograph } from "react-icons/hi";
// import { useEffect, useRef } from "react";
// import { useState } from "react";
// import {app} from "../firebase";
// import { getDownloadURL, ref, uploadBytesResumable , getStorage } from "firebase/storage";

// export default function Input() {
//     const { data: session } = useSession();
//     const imagePickRef = useRef(null);
//     const [imageFileUrl, setImageFileUrl] = useState(null);
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [imageFileUploading, setImageFileUploading] = useState(false);
//     console.log(imageFileUrl);

//     const addImageToPost = (e) => {
//         // Handle image selection logic here
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//             setImageFileUrl(URL.createObjectURL(file));
            
//         }
//     };

//     useEffect(() => {
//         if (selectedFile) {
//             uploadImageToStorage();
//         }
//     }, [selectedFile]);

//     const uploadImageToStorage = () => {
//         setImageFileUploading(true);
//         const storage = getStorage(app);
//         const filename = new Date().getTime() + "-" + selectedFile.name;
//         const storageRef = ref(storage, filename);
//         const uploadTask = uploadBytesResumable(storageRef, selectedFile);
//         uploadTask.on("state_changed" , (snapshot) => {
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log("Upload is " + progress + "% done");
//         });
//     };

//     if (!session) return null;

//     return (
//         <div className="flex border-b border-gray-200 p-3 space-x-3 w-full">
//             <img 
//                 src={session.user.image} 
//                 alt="User Image" 
//                 className="w-11 h-11 rounded-full cursor-pointer hover:brightness-95" 
//             />
//             <div className="w-full divide-y divide-gray-200">
//                 <textarea 
//                     className="w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700" 
//                     placeholder="What's happening?" 
//                     rows="2"
//                 ></textarea>
//                 {
//                     selectedFile && (
//                         <img 
//                             src={imageFileUrl} 
//                             alt="Selected Image" 
//                             className="w-full max-h-[250px] object-cover rounded-lg cursor-pointer"
//                         />
//                     )
//                 }
//                 <div className="flex items-center justify-between pt-2.5">
//                     {/* Image Upload Button */}
//                     <HiOutlinePhotograph 
//                         className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer"
//                         onClick={() => imagePickRef.current.click()}
//                     />
//                     <input 
//                         type="file" 
//                         ref={imagePickRef} 
//                         accept="image/*" 
//                         onChange={addImageToPost} 
//                         hidden 
//                     />
                    
//                     {/* Post Button */}
//                     <button 
//                         className="bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
//                     >
//                         Post
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


// "use client";
// import { useSession } from "next-auth/react";
// import { HiOutlinePhotograph } from "react-icons/hi";
// import { useEffect, useRef, useState } from "react";
// import { app } from "../firebase";
// import { getDownloadURL, ref, uploadBytesResumable, getStorage } from "firebase/storage";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// export default function Input() {
//     const { data: session } = useSession();
//     const imagePickRef = useRef(null);
//     const [imageFileUrl, setImageFileUrl] = useState(null);
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [imageFileUploading, setImageFileUploading] = useState(false);
//     const [text , setText] = useState("");
//     const [postLoading, setPostLoading] = useState(false);
//     const { db } = app;

//     // console.log(imageFileUrl);

//     const addImageToPost = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setSelectedFile(file);
//             setImageFileUrl(URL.createObjectURL(file));
//         }
//     };

//     useEffect(() => {
//         if (selectedFile) {
//             uploadImageToStorage();
//         }
//     }, [selectedFile]);

//     const uploadImageToStorage = () => {
//         if (!selectedFile) return;
//         setImageFileUploading(true);
//         const storage = getStorage(app);
//         const filename = new Date().getTime() + "-" + selectedFile.name;
//         const storageRef = ref(storage, filename);
//         const uploadTask = uploadBytesResumable(storageRef, selectedFile);

//         uploadTask.on(
//             "state_changed",
//             (snapshot) => {
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 console.log("Upload is " + progress + "% done"); // ✅ Removed extra `)`
//             },
//             (error) => {
//                 console.error(error);
//                 setImageFileUploading(false);
//                 setImageFileUrl(null);
//                 setSelectedFile(null);
//             },
//             () => {
//                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                     setImageFileUrl(downloadURL);
//                     setImageFileUploading(false);
//                 });
//             }
//         );
//     };

//     const handleSubmit = async () => {
//         setPostLoading(true);
        
//         const docRef = await addDoc(collection(db, "posts"), {
//             uid: session.user.uid,
//             name: session.user.name,
//             username: session.user.username,
//             text,
//             profileImg: session.user.image,
//             timestamp: serverTimestamp(),
//         });
//         setPostLoading(false);
//         setText("");
//         setImageFileUrl(null);
//         setSelectedFile(null);
//     };


//     if (!session) return null;

//     return (
//         <div className="flex border-b border-gray-200 p-3 space-x-3 w-full">
//             <img
//                 src={session.user.image}
//                 alt="User Image"
//                 className="w-11 h-11 rounded-full cursor-pointer hover:brightness-95"
//             />
//             <div className="w-full divide-y divide-gray-200">
//                 <textarea
//                     className="w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700"
//                     placeholder="What's happening?"
//                     rows="2"

//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                 ></textarea>
//                 {selectedFile && (
//                     <img
//                         src={imageFileUrl}
//                         alt="Selected Image"
//                         className="w-full max-h-[250px] object-cover rounded-lg cursor-pointer"
//                     />
//                 )}
//                 <div className="flex items-center justify-between pt-2.5">
//                     {/* Image Upload Button */}
//                     <HiOutlinePhotograph
//                         className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer"
//                         onClick={() => imagePickRef.current.click()}
//                     />
//                     <input
//                         type="file"
//                         ref={imagePickRef}
//                         accept="image/*"
//                         onChange={addImageToPost}
//                         hidden
//                     />

//                     {/* Post Button */}
//                     <button disabled={text.trim() === "" || postLoading || imageFileUploading}
//                     className="bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50" 
//                     onClick={handleSubmit}>
//                         Post
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";
import { useSession } from "next-auth/react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase"; // ✅ FIXED: Correctly import Firestore
import { getDownloadURL, ref, uploadBytesResumable, getStorage } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Input() {
    const { data: session } = useSession();
    const imagePickRef = useRef(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageFileUploading, setImageFileUploading] = useState(false);
    const [text , setText] = useState("");
    const [postLoading, setPostLoading] = useState(false);

    const addImageToPost = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        if (selectedFile) {
            uploadImageToStorage();
        }
    }, [selectedFile]);

    const uploadImageToStorage = () => {
        if (!selectedFile) return;
        setImageFileUploading(true);
        const storage = getStorage();
        const filename = new Date().getTime() + "-" + selectedFile.name;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, selectedFile);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
            },
            (error) => {
                console.error(error);
                setImageFileUploading(false);
                setImageFileUrl(null);
                setSelectedFile(null);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageFileUrl(downloadURL);
                    setImageFileUploading(false);
                });
            }
        );
    };

    const handleSubmit = async () => {
        setPostLoading(true);
        
        await addDoc(collection(db, "posts"), { // ✅ FIXED: `db` is now correctly used
            uid: session.user.uid,
            name: session.user.name,
            username: session.user.username,
            text,
            profileImg: session.user.image,
            timestamp: serverTimestamp(),
            image: imageFileUrl,
        });

        setPostLoading(false);
        setText("");
        setImageFileUrl(null);
        setSelectedFile(null);
        location.reload(); // ✅ FIXED: Reload the page after posting
    };

    if (!session) return null;

    return (
        <div className="flex border-b border-gray-200 p-3 space-x-3 w-full">
            <img
                src={session.user.image}
                alt="User Image"
                className="w-11 h-11 rounded-full cursor-pointer hover:brightness-95"
            />
            <div className="w-full divide-y divide-gray-200">
                <textarea
                    className="w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700"
                    placeholder="What's happening?"
                    rows="2"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                {selectedFile && (
                    <img
                    src={imageFileUrl}
                    alt="Selected Image"
                    className={`w-full max-h-[250px] object-cover rounded-lg cursor-pointer 
                    ${imageFileUploading ? "animate-pulse" : ""}`}
                    />
                )}
                <div className="flex items-center justify-between pt-2.5">
                    <HiOutlinePhotograph
                        className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 rounded-full cursor-pointer"
                        onClick={() => imagePickRef.current.click()}
                    />
                    <input
                        type="file"
                        ref={imagePickRef}
                        accept="image/*"
                        onChange={addImageToPost}
                        hidden
                    />

                    <button
                        disabled={text.trim() === "" || postLoading || imageFileUploading}
                        className="bg-blue-500 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                        onClick={handleSubmit}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
}