import React, { useState  } from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
import logo from '../Images/pizzaLogo.png';

const AdminLogin = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('')

    const login = useNavigate();


    const user = "Dog@gmail.com";
    const userPassword = "Dog"



    const handleLogin = (e) => {

        if(email == user && password == userPassword ){
            login('/AddProduct')
        }else{
           alert("Wrong Information")
        }

        console.log(email)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="adminContainer">
               <div className="logo">
                <img src={logo} width="25px" height="25px"/>
            <p className="logo">Pizza Palace</p>
            </div>
            <h2>Hello, Admin</h2>
            <p>Login to view all products</p>
            <div className="adminForm">
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="text" placeholder="Email" name="email" value={email} />
                    <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" placeholder="Password" name="password" value={password} />
                    <button onClick={handleLogin} className="btn btn-danger">Login</button>

                </form>
            </div>
        </div>
    )
}

export default AdminLogin;