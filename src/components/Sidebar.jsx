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

import Link from "next/link";
import { RiMentalHealthFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <RiMentalHealthFill size={64} className="cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link href="/" className="flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 w-auto">
        <HiHome size={50} className="mr-2" />
        <span className="font-bold hidden sm:inline xl:inline">Home</span>
      </Link>
      <button className="bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md">Sign in</button>
    </div>
  );
}