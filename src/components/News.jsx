// "use client";

// import React, { useState, useEffect } from "react";

// export default function News() {
//   const [news, setNews] = useState([]);
//   const [articleNumber, setArticleNumber] = useState(3);

//   useEffect(() => {
//     fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
//       .then((res) => res.json())
//       .then((data) => setNews(data.articles));
//   }, []); // Fixed missing closing bracket and added dependency array

//   return (
//     <div>
//         {news.slice(0, articleNum).map((article) => (
//             <h1>{article.title}</h1>
//         )
//     )}
//     </div>
//   );
// }


// "use client"; 

// import React, { useState, useEffect } from "react";

// export default function News() {
//   const [news, setNews] = useState([]);
//   const [articleNumber, setArticleNumber] = useState(3);

//   useEffect(() => {
//     fetch(`https://newsapi.org/v2/everything?q=mental%20health&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`)
//       .then((response) => response.json())
//       .then((data) => setNews(data.articles))
//       .catch((error) => console.error("Error fetching news:", error));
//   }, []); // Dependency array ensures this runs only once

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-bold mb-2">Latest News</h2>
//       <ul>
//         {news.slice(0, articleNumber).map((article, index) => (
//           <li key={index} className="mb-4">
//             <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//               {article.title}
//             </a>
//             <p className="text-sm text-gray-600">{article.source.name}</p>
//           </li>
//         ))}
//       </ul>
//       {articleNumber < news.length && (
//         <button
//           onClick={() => setArticleNumber(articleNumber + 3)}
//           className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Load More
//         </button>
//       )}
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";

// export default function News() {
//   const [news, setNews] = useState([]);
//   const [articleNumber, setArticleNumber] = useState(3);

//   useEffect(() => {
//     fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
//       .then((res) => res.json())
//       .then((data) => setNews(data.articles));
//   }, []);

//   return (
//     <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2">
//         <h4 className="font-bold text-xl px-4">Whats happening</h4>
//       {news.slice(0, articleNumber).map((article) => ( // Fixed incorrect variable name
//         <div key = {article.url}>
//             <a href={article.url} target="_blank">
//                 <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
//                     <div>
//                         <h6 className="text-sm font-bold">{article.title}</h6>
//                         <p className="text-xs font-medium text-gray-500">{article.source.name}</p>
//                     </div>
//                     <img src={article.urlToImage} alt={article.title} width={70} className="rounded-xl"/>
//                 </div>
//             </a>
//               {article.title}
//         </div>
//       ))}
//     </div>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNumber, setArticleNumber] = useState(3);

  useEffect(() => {
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2">
      <h4 className="font-bold text-xl px-4">What's happening</h4>
      {news.slice(0, articleNumber).map((article) => (
        <div key={article.url}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
              <div>
                <h6 className="text-sm font-bold">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">
                  {article.source.name}
                </p>
              </div>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                //   alt={article.title}
                  width={70}
                  className="rounded-xl"
                />
              )}
            </div>
          </a>
        </div>
      ))}
      <button onClick={() => setArticleNumber(articleNumber + 3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400 text-sm">
        Load More
      </button>
    </div>
  );
}


