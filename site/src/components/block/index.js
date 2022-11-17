import storage from 'local-storage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Block() {
    const navigate =  useNavigate();
      
      
    useEffect(() => {
           if (!storage ('Cliente-logado')) {
              navigate('/');
           }
    }, [])
  
    
  
}