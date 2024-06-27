
"use client"

import { useEffect, useState } from "react";
import { User } from "./types/User";


const Page = () => {

   const [users,setUsers] = useState <User[]>([]);

   useEffect(() =>{

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
         setUsers(json);
      })
   },[]);

   return (
      <div className="container mx-auto">
         <h1 className="text-3xl text-center text-red-400">Lista de Usuários</h1>

         <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-700">
               <thead className="bg-gray-900">
                  <tr>
                     <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-red-300 uppercase tracking-wider">
                        Nome
                     </th>
                     <th className="px-6 py-3 text-left text-xs leading-4 font-medium  text-red-300 uppercase tracking-wider">
                        Email
                     </th>
                  </tr>
               </thead>
               <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {users.map(item => (
                     <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-300">
                           {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-300">
                           {item.email}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Page;