"use client"

import { useRouter } from 'next/navigation'; 
const Homepage = () => {
    const router = useRouter();
    return (<div>
     This is homepage
     <br/>
     
    <button onClick={(e) => router.push('/')}>
     <a>back</a> 
    </button>
    </div>
    )
}

export default Homepage;