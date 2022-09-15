import React from "react";
import {useState} from "react";
import {  useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import instance from "../Config/axios";

const Login = () => {
    const [identity, setIdentity] = useState();
    const [passwd, setPasswd] = useState();
    const navigate = useNavigate();
    const [errormess, setErrorMess] = useState("");


    const send = {
        email: identity,
        password: passwd
    };
    
    const error =()=>{
        toast.error(errormess);
        navigate('/login');
    }

    const authentify = async ()=>{
        navigate("/home");
        /*buttonconst options = {
               method : 'POST' ,
               headers : {
                   "Content-type":"application/json"
               },
               body : JSON.stringify(send)
           };
       
               await fetch('http://localhost:8080/perform_login', options)
               .then(response => response.status === 200 ? navigate('/') : error() )
               .catch((error) => {
                    setErrorMess("Veuillez vérifier vos identifiants.")
                    console.log(error);
                });
                instance.post("perform_login", options)
                .then((res) => {
                    navigate("/")
                })
                .catch((err) => {
                    console.log(err);
                })*/
       }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(identity);
        console.log(passwd);
    };

    return(
        <div className="d-flex justify-content-center m-5">
            <div className="card col-lg-5 m-3">
            <form>
            <div className="card-header text-center">
                <h4>Bienvenu sur BC management!</h4>
                <p>Veuillez vous connecter pour continuer.</p>
            </div>
            <div className="card-body">
                <label for="#id">Nom d'utilisateur</label>
                <input type="text" id="id" className="form-control mt-3" placeholder="Identifiant..."/>
                <label for="#passwd" className="mt-3">Mot de passe</label>
                <input type="password" id="passwd" className="form-control mt-3" placeholder="Mot de passe..."/>
                <div className="text-center">
                    <button className="btn btn-secondary mt-4" onClick={() => authentify()}>Se connecter</button>    
                </div>
            </div>
            </form>
            </div>
        </div>
    )
}
export default Login;