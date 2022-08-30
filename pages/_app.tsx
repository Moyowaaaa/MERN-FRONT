import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WorkoutsContextProvider } from '../context/WorkoutContext'
import { AuthContextProvider } from '../context/AuthContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
  <WorkoutsContextProvider>
 <Component {...pageProps} />
    </WorkoutsContextProvider>
    </AuthContextProvider>
 

  )
}


export default MyApp
