import React,{useState} from 'react'
import { useLogin } from '../hooks/useLogin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginForm:React.FC = () => {
    const [email,setEmail] = useState<string>()
    const [password,setPassword] = useState<string>()
    const {Login,error,isLoading} = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email,password)


        await Login(email,password)



      
    }


  return (
    <div className=' w-full h-screen flex flex-col items-center justify-center'>
 <ToastContainer />
    <div className='w-4/12  p-12 flex flex-col gap-4 shadow-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
         
            <div>
            <h3 className='text-center text-3xl font-bold'>Login</h3> <br/> 
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

<button disabled={isLoading} className="w-full bg-[blue] text-white p-4">Login</button>
        </form>

    </div>
    </div>
  )
}

export default LoginForm