import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Button(){
    const [subscribe,setSuscribe] = useState
    (false)



    return (
        <button 
        onClick={() =>{
          toast.success(`${! subscribe ? "Te has suscrito" : "No estas suscrito"}`)
          setSuscribe(!subscribe)
        }}
        >
            {subscribe ? "Ya estas suscrito" : "SUSCRIBETE"}
        </button>
    )
}

export default Button