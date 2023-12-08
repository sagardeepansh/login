
import React, { useState } from "react"
import axios from "axios";
import { useRouter } from 'next/navigation'

const showError=(e)=>{
  var errorDiv = document.querySelector("#errorBox");
  var allChildren =  errorDiv.querySelectorAll(":scope > span")
  allChildren[0].innerHTML = e;
  errorDiv.style.display = 'block';
}

const LoginForm = () => {
  
    const router = useRouter()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
    
      const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
    
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
      }
    
      const submitForm = (e) => {
        // We don't want the page to refresh
        e.preventDefault()
    
        const formURL = e.target.action
        
        axios({
            // Endpoint to send files
            url: formURL,
            method: "POST",
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            // Attaching the form data
            data: formData,
        })
        // Handle the response from backend here
        .then((res) => {
              var respon = res.data;
              console.log(respon);
              // console.log(respon.userDetails[0].fname);
                if (respon.status==200) {
                    localStorage.setItem('token', respon.token);
                    localStorage.setItem('name', respon.userDetails[0].fname);
                    localStorage.setItem('emailid', respon.userDetails[0].emailid);
                    localStorage.setItem('id', respon.userDetails[0].id);
                    router.push("/dashboard")
                }else if(respon.msg=='invalid'){
                  showError('Please check your details');
                } else{
                  showError('Some error contact Dev');
                }
        })
        // Catch errors if any
        .catch((err) => {
            console.log(err);
        });
    }

    return (
    <>
    <div className="container mx-auto my-8">
      <div className="w-full max-w-xs mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="http://localhost:5000/login" onSubmit={submitForm} >
          <div id="errorBox" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-3 rounded relative" role="alert">
            <span className="block sm:inline">Invalid Login</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" onChange={handleInput} value={formData.username} id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" onChange={handleInput} value={formData.password} type="password" placeholder="Password"/>
          
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy; All rights reserved.</p>
      </div>
    </div>
    </>
    )
}

export default LoginForm;