import {useState} from 'react'
import {useNavigate} from "react-router-dom"
// import ComingSoon from '../ComingSoon/ComingSoon'
// console.log("hello events")
import { useAuth } from "../contexts/AuthContext"



async function Logout ()  {

    const [error, setError] = useState("")
    const {  logout } = useAuth()  
    const history = useNavigate()  
   
    setError("")
    
    try {
        await logout()
        history("/chem-event")
    } catch {
        setError("Failed to log out")
    }
}  
  

export default Logout