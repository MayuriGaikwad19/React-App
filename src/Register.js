import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";




const Register = () => {

const [id, idchange]= useState("");
const [fullname, fullnamechange]= useState("");
const [password, passwordchange]= useState("");

const navigate = useNavigate ();




<ToastContainer></ToastContainer>

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj={id, fullname, password};
        //console.log( regobj );

        fetch("http://localhost:8000/user", {
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
           
           toast.success('Registered Successfully!')
           navigate('/login');
        }).catch((err)=>{
           
            toast.error('Failed : ' + err.message);
        });
    }
    
    return ( 
<div>
   <br></br>
   <br></br>
   <br></br>
   

<div className="offset-lg-3 col-lg-6">
    <form className="container" onSubmit={handlesubmit}>
        <div className="card">
        <div className="card-header">
        <h1> User Registration </h1>
        </div>

         <div className="card-body" >
            <div className="form-group">
                <label> Full Name <span className="errmsg"></span></label>
                <input value={fullname} onChange={e=>fullnamechange(e.target.value)} className="form-control"></input>
            </div>
            <br></br>

            <div className="form-group">
                <label> User Name <span className="errmsg"></span></label>
                <input value={id} onChange={e=>idchange(e.target.value)}  className="form-control"></input>
            </div>
                     <br></br>
     
            <div className="form-group">
                <label> Password <span className="form-control"></span></label>
                <input value={password} onChange={e=>passwordchange(e.target.value)} className="form-control"></input>
            </div>
         
         <br></br>
            <button type="submit" className="btn btn-success"> Register </button>

         </div>

            <div class>
        <span class="psw">Already have an account? <a href="/login">Login</a> here </span>
      </div>
       <br></br>
            
        </div>
    </form>
</div>

    
</div>

     );
}
 
export default Register;
