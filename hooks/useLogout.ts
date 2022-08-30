import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const useLogout = () => {
    const { dispatch} = useAuthContext()
    const router = useRouter() 

    const logout = () => {
        localStorage.removeItem('user')
        toast.warning('You are logged out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
           
            progress: undefined,
            theme: "colored"
        })

        setTimeout(function() {
            router.push('/')
        })
       

        dispatch({type: 'LOGOUT'})
    }


    return {logout}
}