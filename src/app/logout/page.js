"use client"
import { useRouter } from 'next/navigation'



const Logout = () => {
  const router = useRouter();
  localStorage.clear();
  router.push("/")
  return(
    <>
    <h1>dfsdf</h1>
    </>
  )
}

export default Logout;