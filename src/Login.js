import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const[username, usernameupdate]=useState('');
    const[password, passwordupdate]=useState('');

    <ToastContainer></ToastContainer>

    const usenavigate = useNavigate ();
    
    const ProceedLogin = (e) =>{
        e.preventDefault();
        if(validate()){
            ///implementation
            //console.log('proceed')

            fetch("http://localhost:8000/user/" +username).then((res)=>{
                return res.json();
            }).then((resp)=>{
               //console.log(resp)

               if(Object.keys(resp).length === 0) {
                toast.error('Please enter valid username');
               } 
               else {
                if (resp.password === password){
                   toast.success('Login successfuly!')
                   usenavigate ('/mapscrn');
                }
                else {
                    toast.error('Please enter valid data');
                }
               }

            }).catch((err)=>{
               toast.error('Login failed due to :' +err.message);
            });
        }
    }

    const validate=()=>{
        let result=true;
        if(username === '' || username ===null){
            result=false;
            toast.warning('Please enter username');
            
        }

        if(password === '' || password ===null){
            result=false;
            toast.warning('Please enter password');
            
        }

        return result;
    }

    return ( 
<div>
<br></br>
   <br></br>
   <br></br>

<div className="offset-lg-3 col-lg-6">
    <form className="container" onSubmit={ProceedLogin}>
        <div className="card">
        <div className="card-header">
        <h1> Login </h1>
        </div>

         <div className="card-body" >
            <div className="form-group">
                <label> User Name <span className="errmsg"></span></label>
                <input value={username} onChange={e=>usernameupdate(e.target.value)}  className="form-control"></input>
            </div>
                     <br></br>
     
            <div className="form-group">
                <label> Password <span className="form-control"></span></label>
                <input value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control"></input>
            </div>
         
         <br></br>
            <button type="submit" className="btn btn-danger"> Login </button>

         </div>

            <div class>
        <span class="psw">If you don't have an account? then <a href="/register">Register</a> first </span>
      </div>
       <br></br>
            
        </div>
    </form>
</div>
</div>

     );
}
 
export default Login;

