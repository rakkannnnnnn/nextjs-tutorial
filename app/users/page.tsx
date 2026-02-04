export default async function Users(){
    // let users = [];
    // try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        console.log("gggg:", users);
    // }catch(err){
    //     console.log("spome error", err);
    // }
   
    return (
        <div>
            <h1>users List</h1>
            <ul>
                {users.map((user: { id: number; name: string })=>(
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}




// "use client"

// import { useState } from "react";

// export default function Users(){
//     const [users, setusers] = useState([]);
//     try{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res)=>res.json())
//         .then((dat)=>setusers(dat));
//     }catch(err){
//         console.log("spome error", err);
//     }
   
//     return (
//         <div>
//             <h1>users List</h1>
//             <ul>
//                 {users && users.map((user: { id: number; name: string })=>(
//                     <li key={user.id}>
//                         <h3>{user.name}</h3>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }