"use client";

import React, { useEffect } from 'react';

import { 
  useSessionContext, 
 
} from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';



import Modal from './Modal';
import useUploadModal from '@/hooks/useUploadModal';

const UploadModal = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const { onClose, isOpen } = useUploadModal()
  
  



  const onChange = (open: boolean) => {
    if (!open) {

      onClose();
    }
  }

  return (
    <Modal 
      title="upload modal title" 
      description="upload modal description" 
      isOpen={isOpen} 
      onChange={onChange} 
    >
     Upload Modal content!
    </Modal>
  );
}

export default UploadModal