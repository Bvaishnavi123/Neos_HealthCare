import { useNavigate } from "react-router-dom"
import './Register.css'
export const Register = ()=>{
    const navigate =  useNavigate()
    return(
        <>
        <form onSubmit={()=>navigate('/login')}>
                <h2>Signup</h2>
                <input id="name" type="text" placeholder="Enter your Name"/><br/><br/>
                <input id="number" type="text" placeholder="Enter your Contact"/><br/><br/>
                <input id="email" type="email" placeholder="Enter your Email"/><br/><br/>
                <input id="pass" type="password" placeholder="Enter your Password"/><br/><br/>
                <input type="submit"/>
            </form>
        </>
    )
}