"use client"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';


const Logout = () => {
  const router = useRouter();
  const [localdata, setLocaldata] = useState({    
    localid: "",
    localemailid: "",
    localusername: "",
    localtoken: "",
    }
  );
  
  useEffect(() => {
    localStorage.clear();
  }, []);
  

  if(!localdata.localtoken){
    return(
      <>
      <h1> ggg</h1>
      </>
    )
  }
  router.push("/");
  
}

export default Logout;