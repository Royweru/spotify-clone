'use client'
import React,{forwardRef} from 'react'
import { twMerge } from 'tailwind-merge'


interface ButtonProps 
 extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
    className,
    children,
    disabled,
    type="button"
},ref)=>{
    return(
        <button
        type={type}
        className={twMerge(`
         w-full
         rounded-full
         bg-green-500
         birde
         border-transparent
         px-3
         py-3
         disabled:cursor-not-allowed
         disabled:opacity-50
         text-bold
         font-bold
         hover:opacity-75
         transition
        `,className)}
        >
            {children}
        </button>
    )
})
Button.displayName =  "Button"

export default Button