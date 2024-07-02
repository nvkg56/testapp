"use client";

// import { useState, useEffect } from "react";

// export default function Effect() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     fetch("https://reqres.in/api/unknown/")
//       .then((res) => res.json())
//       .then((fdata) => setUserData(fdata.data));
//   }, []);
//   console.log(userData);
//   return (
//     <div>
//       {userData &&
//         userData.map((user) => (
//           <div key={user.id} className="bg-slate-500 m-3 p-3">
//             <p>Name : {user.name}</p>
//             <p>Year : {user.year}</p>
//           </div>
//         ))}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  year: number;
}

export default function Effect() {
  const [userData, setUserData] = useState<User[] | null>(null);

  useEffect(() => {
    fetch("https://reqres.in/api/unknown/")
      .then((res) => res.json())
      .then((fdata) => setUserData(fdata.data));
  }, []);

  console.log(userData);

  return (
    <div>
      {userData &&
        userData.map((user) => (
          <div key={user.id} className="bg-slate-500 m-3 p-3">
            <p>Name : {user.name}</p>
            <p>Year : {user.year}</p>
          </div>
        ))}
    </div>
  );
}
