"use client"
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import LoginForm from "./components/login";


// homeCont
export default function HomePage() {
  return (
    <>
    {/* <PageWithJSbasedForm/> */}
    <Header/>
    <LoginForm />
    <Footer/>
   </>
  )
}
