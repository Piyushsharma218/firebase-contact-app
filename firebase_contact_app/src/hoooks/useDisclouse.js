import React, { useState } from 'react'

const useDisclouse = () => {

    const [isopen,setopen]=useState(false)
    
      function onopen(){
        setopen(true);
      }
    
      function onclose(){
        setopen(false);
      }
  return { onclose, onopen, isopen }
}

export default useDisclouse