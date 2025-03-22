// import { RiMentalHealthLine } from "react-icons/ri";
// import { HiHome } from "react-icons/hi";



// export default function Sidebar() {
//   return (
//     <div>
//         <Link href='/'>
//         <RiMentalHealthLine className="w-16 cursor-pointer p-3 hover:bg-gray-100"/>
//         </Link>
       
//     </div>
//   )
// }

// import Link from "next/link";
// import { RiMentalHealthFill } from "react-icons/ri";
// import { HiHome } from "react-icons/hi";

// export default function Sidebar() {
//   return (
//     <div>
//       <Link href="/">
//         <RiMentalHealthFill size={64} className="cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
//       </Link>
//       <Link href="/" className="flex item-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 w-fit">
//         <HiHome size={50} />
//         <span className="font-bold hidden xl:inline">Home</span>
//       </Link>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { RiMentalHealthFill } from "react-icons/ri";
import { HiHome , HiDotsHorizontal } from "react-icons/hi";
import { signIn , signOut ,useSession} from "next-auth/react";

export default function Sidebar() {
  const {data: session} = useSession();

  //console.log(session);


  
  return (
    <div className="flex flex-col p-3 justify-between h-screen">
      <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <RiMentalHealthFill size={64} className="cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link href="/" className="flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 w-auto">
        <HiHome size={50} className="mr-2" />
        <span className="font-bold hidden sm:inline xl:inline">Home</span>
      </Link>
      {session? 
      (<button className="bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md font-semibold" onClick={() => signOut()}>Sign out</button>) :
      (<button className="bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md font-semibold" onClick={() => signIn()}>Sign in</button>)}
     </div>
     {session && (
      <div className="text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200"> 
        <img src={session.user.image} alt="user image" className="h-10 w-10 rounded-full xl:mr-2"/>
        <div className="hidden xl:inline"> 
        <h4 className="font-bold">{session.user.name}</h4>
        <p className="text-gray-500">@{session.user.username}</p>
        </div>
        <HiDotsHorizontal className="h-5 xl:ml-8 hidden xl:inline"/>
      </div>
      
     )}
    </div>
  );
}



// "use client";

// import Link from "next/link";
// import { RiMentalHealthFill } from "react-icons/ri";
// import { HiHome } from "react-icons/hi";
// import { signIn, signOut, useSession } from "next-auth/react";

// export default function Sidebar() {
//   const { data: session } = useSession();

//   // Debugging logs
//   console.log("Session Data:", session);
//   if (session) {
//     console.log("User Info:", session.user);
//     console.log("User Image:", session.user.image);
//   } else {
//     console.log("User is not signed in.");
//   }

//   return (
//     <div className="flex flex-col gap-4 p-3">
//       <div>
//         <Link href="/">
//           <RiMentalHealthFill
//             size={64}
//             className="cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200"
//           />
//         </Link>
//         <Link
//           href="/"
//           className="flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 w-auto"
//         >
//           <HiHome size={50} className="mr-2" />
//           <span className="font-bold hidden sm:inline xl:inline">Home</span>
//         </Link>
//         {session ? (
//           <button
//             className="bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md font-semibold"
//             onClick={() => signOut()}
//           >
//             Sign out
//           </button>
//         ) : (
//           <button
//             className="bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md font-semibold"
//             onClick={() => signIn()}
//           >
//             Sign in
//           </button>
//         )}
//       </div>
//       {session && (
//         <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-md shadow-sm">
//           <img
//             src={session.user.image}
//             alt="User"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <h4 className="text-lg font-semibold">{session.user.name}</h4>
//             <p className="text-sm text-gray-600">{session.user.email}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }