


import React, {useState, useEffect} from "react";
import GoogleLogin from 'react-google-login';
import {gapi} from 'gapi-script';
import {useNavigate,Link } from 'react-router-dom';


export default function Login(props) {
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    const [gmail, setGmail] = useState(null);
    const [name, setName] = useState(null);
    const [user,setUser] = useState(null);
    const url = "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"


    useEffect(()=>{
      async function start(){
        gapi.client.init({
          clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          scope:""
        });
      };
      gapi.load('client:auth2', start);
    });


    const responseFacebook = (response) => {
      console.log(response);
    }

      
    const responseGoogle = async (response) => {
      if(response){
        setGmail(response.profileObj.email);
        setName(response.profileObj.name)
        setUser(response.profileObj);
        if(gmail){
          localStorage.setItem('userName', user.name);
          localStorage.setItem('email', user.email);
          localStorage.setItem('imageUrl', user.imageUrl);
          handleLogin();
        }else{
          alert("Please try again");
        }
      }
    }

    const handleGoogleFailure = (response) =>{
      console.log(response);
    }

  const handleLogin = ()=>{ 
      fetch('http://localhost:8888/google-login', 
          {
            method:'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:gmail,name:name})
      })
      .then(response =>{
        return response.json();
      })
      .then(data=>{
        console.log(data);
        const { token, user } = data.data;
        props.setUserId(user._id);
        localStorage.setItem('token', token);
        localStorage.setItem('login', true);
        localStorage.setItem('userId', user._id);
       
        setLoggedIn(true);
        props.onLogin();
        props.storeCollector();
        navigate('/home');
      })
  }

    
    


    const handleSubmit = (event) =>{
        event.preventDefault(); 
        fetch('http://localhost:8888/login',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email:email, password: password})
        })
        .then(response=>{
            return response.json();
        })
        .then(data=>{
           
            const { token, user } = data.data;
            props.setUserId(user._id);
            console.log(user);

            localStorage.setItem('token', token);
            localStorage.setItem('login', true);
            localStorage.setItem('userId', user._id);
            localStorage.setItem('userName', user.name);
            localStorage.setItem('email', user.email);
            localStorage.setItem('imageUrl',"https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI=");
           
            setLoggedIn(true);
            props.onLogin();
            props.storeCollector();
            navigate('/home');
            
        })
        .catch(error => {
            alert('Login failed:', error);
          });
    }


    



  return (
    
    <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%),url(${url})`, backgroundSize: 'cover', backgroundPosition: "center",backgroundRepeat: 'no-repeat', height: "100vh"}}>

   
    <div className="container h-100 br-5"  >
      <div className="row h-100 align-items-center justify-content-center ">
        <div className="col-md-6 d-flex">
          <div className="card m-auto" style={{minWidth:'30vw', maxWidth:'95vw'}}>
            <div className="card-body m-3">
              {loggedIn ? (
                <div>
                  <h2 className="card-title text-center">Welcome, user!</h2>
                </div>
              ) : (
                        <div>
                          <h2 className="card-title text-center mb-4">Login</h2>
                          <form onSubmit={handleSubmit} className="pt-2 mx-auto" style={{minWidth:"75%", maxWidth:'95%'}}>
                            <div className="form-group pb-2" >
                              {/* <label htmlFor="email">Email</label> */}
                              <input
                                type="email"
                                className="form-control mt-2"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                              />
                            </div>
                            <div className="form-group pb-4">
                              {/* <label htmlFor="password">Password</label> */}
                              <input
                                type="password"
                                className="form-control mt-2"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                              />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                          </form>
                          <div style={{minWidth:'30vw', maxWidth:'95vw'}}>
                            <div className="mt-3 mx-auto" style={{minWidth:"75%", maxWidth:'95%'}}>
                                <GoogleLogin
                                  clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                  buttonText="Continue with Google"
                                  onSuccess={responseGoogle}
                                  onFailure={handleGoogleFailure}
                                  // className='google'
                                  cookiePolicy={'single_host_origin'}
                                   className="mt-3 w-100 text-center"
                                />
                            </div>
                            

                          </div>
                          <div className="text-center mt-4">
                            <p>Don't have an account? <Link to="/register" className="btn text-primary pt-0">Register Here!</Link></p>
                          </div>
                        </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}
