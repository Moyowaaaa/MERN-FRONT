import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSignup } from '../hooks/useSignup'


const SignupFrom:React.FC = () => {
    const [email,setEmail] = useState<string | null>()
    const [password,setPassword] = useState<string | null>()
    const {Signup,error,isLoading} = useSignup()





    const handleSubmit = async (e:any) => {
        e.preventDefault()
        

        await Signup(email,password)
    }


  return (
    <div className=' w-full h-screen flex flex-col items-center justify-center'>
 <ToastContainer />
    <div className='w-4/12  p-12 flex flex-col gap-4 shadow-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

  <div>
            <h3 className='text-center text-3xl font-bold'>Signup</h3> <br/> 
            <label>Email</label>
            <br/>
            <input type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 text-black"
            />
            <br/>
            </div>

            <div>

<label>Password</label>
<br/>
            <input type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 text-black"
            />
            <br/>
            </div>

            <button disabled={isLoading} className="w-full bg-[blue] text-white p-4">SignUp</button>
        </form>
       
    </div>
    </div>
  )
}

export default SignupFrom