"use client"

import { useRouter } from 'next/navigation'; 

function namepage (){
   const router = useRouter();
   console.log(router)
  return (
    <div>Nabeera khan
      <br/>
    <button onClick={(e) => router.push('/')}>
     <a>back</a> 
    </button>
    </div>
    
  )
}
export default namepage;