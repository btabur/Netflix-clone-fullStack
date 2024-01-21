import React, { useCallback, useState } from 'react'
import Input from './components/Input'
import { FcGoogle, FcGraduationCap } from 'react-icons/fc'
import { FaGit, FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/router'

function auth() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [variant,setVariant] =useState('login')

  const router = useRouter()

  const toogleVariant = useCallback(()=> {
      setVariant((currentVariant)=> currentVariant==='login' ? 'register' :'login')
  },[])

  const login = useCallback(async ()=> {
      try {
        
      } catch (error) {
        
      }
  },[])

  const register = useCallback(async ()=> {
    try {
      
    } catch (error) {
      
    }
},[])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repat bg-center bg-cover">
      <div className='bg-black h-full w-full bg-opacity-45'>

        <nav className='px-12 py-6'>
          <img src="images/logo.png" className='h-12 '/>


        </nav>
        <div className='flex justify-center '>
          <div className='bg-black bg-opacity-85 px-20 py-20 self-center lg:w-2/5 mt-2 rounded-xl w-full'>
            <h2 className='text-white text-5xl mb-8 font-semibold'>
              {variant=='login'? 'Sign in' :'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant=='register' && (
                  <Input id='name'
                  value={name}
                  label='Fullname'
                  onChange={(e:any)=>setName(e.target.value)}
                  type='text '
                  />
              )
              }
            
                <Input id='email'
               value={email}
               label='E mail Adress'
               onChange={(e:any)=>setEmail(e.target.value)}
               type='email '
               />
                <Input id='password'
               value={password}
               label='Password'
               onChange={(e:any)=>setPassword(e.target.value)}
               type='password '
               />
            </div>

            <button onClick={variant=='login' ? login :register}
             className='bg-red-700 py-3 text-white rounded w-full mt-11 
            hover:bg-red-800 transition'> 
            {variant=='login' ? 'Login' :'Sing Up'}
            </button>

            <div className='flex flex-row items-center gap-4 mt-10 justify-center'>
              <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center
              cursor-pointer '>
                <FcGoogle className='text-3xl'/>
              </div>
              <div className='w-10 h-10 rounded-full bg-white flex items-center justify-center
              cursor-pointer '>
                <FaGithub className='text-3xl'/>
              </div>

            </div>
            <p className='text-neutral-500 mt-12'>
             {variant == 'login' ? 'First time using Netflix' :' Already have a account '}
              <span onClick={toogleVariant}
              className='text-white ms-2
              cursor-pointer transition hover:underline '>
               {variant == 'login' ? ' Create account': 'Login'}
                </span>
            </p>

          </div>

        </div>


      </div>

    </div>

  )
}

export default auth