'use client'

import AuthModal from '@/app/components/AuthModal'
import UploadModal from '@/app/components/UploadModal'

import React,{useState,useEffect} from 'react'

const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }
  return (
    <>
     <AuthModal />
     <UploadModal />
    </>
  )
}

export default ModalProvider