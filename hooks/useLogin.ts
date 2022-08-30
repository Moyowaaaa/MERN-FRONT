import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import {useRouter} from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const useLogin= () => {
    const [error,setError] = useState<any>(null)
    const [toastStatus,setToastStatus] = useState<any>(null)
    const [isLoading,setIsLoading] = useState<boolean | any>(null)
    const {dispatch} = useAuthContext()
    const router = useRouter()

    const Login = async (email:string,password:string) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        const json = await response.json()

        
        if(!response.ok) {
            setIsLoading(false)
            setError(
            toast.error(json.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                type: error,
                progress: undefined,
                theme: "colored"
            }))

      
        }
        if(response.ok){
            //local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update auth context
            dispatch({type:'LOGIN', payload:json})

            //loading state
            setIsLoading(
                toast.success("successfully Logged in", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored"
                })
            )

            setTimeout(function() {
                router.push('/workout')
              }, 2000);
              
            
        
        
        }


    }
    return{Login, isLoading,error}


}