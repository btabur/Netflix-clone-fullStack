import React from 'react'

interface InputProps {
    id:string,
    onChange:any,
    value:string,
    label:string,
    type?:string,
  
}

const  Input: React.FC<InputProps> = ({id,label,onChange,type,value})=> {
  return (
    <div className='relative '>
        <input 
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        className='block rounded-xl
        px-5 pt-4 pb-1 w-full
        text-base text-white bg-neutral-600
        focus:outline-none focus:right-0 peer'
        />
        <label className='absolute text-base text-zinc-340
        top-2 z-10 left-3 
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
        duration-150'
        
         htmlFor={id}>{label}</label>

    </div>
  )
}

export default Input