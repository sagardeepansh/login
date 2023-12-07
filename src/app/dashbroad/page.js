"use client"
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
// import Chandu from "../components/commonFun";
import { useRouter } from 'next/navigation'

const dashboard = () => {
  // alert(localStorage.getItem('token'));
  const router = useRouter();
  if(localStorage.getItem('token') != null){
    const people = [
    {
      name: 'Calvin Hawkins',
      email: 'calvin.hawkins@example.com',
      image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristen Ramos',
      email: 'kristen.ramos@example.com',
      image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ted Fox',
      email: 'ted.fox@example.com',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    ]

    const id = localStorage.getItem('id');
    const emailid = localStorage.getItem('emailid');
    const username = localStorage.getItem('name');
    const token = localStorage.getItem('token');

    return(
        <>
        <Header/>
        
        <div class="min-h-full">
            <div class="mx-auto">
              <header class="bg-white shadow">
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                  <h1 class="text-3xl font-bold tracking-tight text-gray-900">Hello {username},</h1>
                </div>
              </header>
              <main>
                <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                  <div className="">
                  <h1>{id}</h1>
                  <h1>{emailid}</h1>
                  <h1>-{token}-</h1>
                    <ul className="divide-y divide-gray-200">
                        {people.map((person) => (
                        <li key={person.email} className="py-4 flex">
                            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                            <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{person.name}</p>
                            <p className="text-sm text-gray-500">{person.email}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </main>
            </div>
        </div>
        
        <Footer/>
        </>
    )
  }
  router.push("/")
}
  

export default dashboard;