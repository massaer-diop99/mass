import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import React, { useState } from 'react';
import './LoginSignup.css'

import  img from '../assets/image-hero-mobile.jpg'

const LoginSignup = () => {
    const [ action , setAction ] =useState(" Veuillez vous inscrire");
    return (
    <div className="w-50 mx-auto py-5">
     <h1>Gestion de budget</h1>
     <h2 className='text-center mt-5 bg-light text-primary'>{action}  </h2>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 bg-light rounded-3'>
                <form>
                    {action=== "S’inscrire" ? <div></div>:<div className="mb-3">
                            <label for="exampleInputEmail1">Nom</label>
                            <input type="text" className="form-control" />
                        </div>}
                        <div className="mb-3">
                            <label for="exampleInputEmail1">Nom</label>
                            <input type="text" className="form-control" />
                        </div> 
                        <div className="mb-3">
                            <label for="exampleInputEmail1">Prenon</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1">Numéro de téléphone,</label>
                            <input type="tel" className="form-control" />
                        </div>
                        
                        <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control"/>
                        </div> 
                        
                        <div className='d-flex justify-content-center '>
                        <button  className= { action ==="S’inscrire" ? "submit gray": "submit btn btn-primary fw-bold m-2"} onClick={()=>{setAction(" S’inscrire")}}> S’inscrire</button>
                        <button  className={ action ===" Se connecte" ? "submit gray": "submit btn btn-primary fw-bold m-2"} onClick={()=>{setAction("Se connecter ")}}> Se connecter</button>
                        </div>

                    </form>
                </div>

                <div className='col-md-6 bg-primary rounded-3 d-sm-none d-md-block'>
                   <img src={img} alt=''/>
                </div>

            </div>
        </div>
      
    </div>


    );
}

export default LoginSignup;

