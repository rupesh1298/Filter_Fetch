import React, { useEffect, useState } from 'react'

function  Fetch() {
    const[user,setUser]=useState([]);
    useEffect(()=>{
        const data=fetch("https://jsonplaceholder.typicode.com/comments").then((res)=>res.json()).then((dd)=>{
           setUser(dd);
           console.log(dd);
        })
        
    },[]);

    //to store keys of object
     const keySet=Object.keys(user.length>0?user[0]:{});
  return (
    <div>
      <h3>Fetching data from JSON</h3>
      <div>
      <table border={"2px solid black"}>
      <thead>
            <tr>
              {keySet.map((item) => (
                <th key={item}>{item} <input type="text" /></th>
              ))}
            </tr>
          </thead>
        {/* <tbody>
            {
                user.map((item)=>{
                    return(
                        <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.company.catchPhrase}</td>
                    </tr>
                    )
                })
            }
        </tbody> */}
       <tbody>
            {user.map((item) => (
              <tr key={item.id}>
                {keySet.map((k) => (
                  <td key={k}>{item[k]}</td>
                ))}
              </tr>
            ))}
          </tbody>
      </table>
      </div>
    </div>
  )
}

export default  Fetch;
