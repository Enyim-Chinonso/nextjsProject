
// export default function Docs({ params }) {
//   const { slug } = params;
  //   if (slug?.length === 2) {

//     return (
  //       <h1>
//         Viewing docs for feature {slug[0]} and concept {slug[1]}
//       </h1>
//     );
//   } else if (slug?.length === 1) {
//     return <h1>Viewing docs for feature {slug[0]}</h1>;
//   } else if (slug?.length === 3) {
//     return <h1>Viewing docs for feature {slug[0]} and concept {slug[1]} and concept {slug[2]}</h1>
//   } else {
//       return (
//         <h1>Docs home page</h1>
//     )
//   }

 
// }


 export default function Docs({ params }) {
   const { slug } = params;


// Case: No slug provided → "/docs"
   if (!slug || slug.length === 0) {
     return <h1>Docs Home Page</h1>;
   }

  // Case: One or more segments → build a flexible output
   if (slug.length >= 1) {
     return (
       <div>
         <h1>Viewing docs path:</h1>
         <ul>
           {slug.map((segment, index) => (
             <li key={index}>
               {index === 0 ? "Feature" : `Subtopic ${index}`} : <strong>{segment}</strong>
             </li>
           ))}
         </ul>
       </div>
     );
   }

  // Fallback (technically won’t be reached with the above logic)
   return <h1>Invalid docs path</h1>;
 }










