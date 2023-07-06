// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div className="container-fluid ">
//       <h1 className="text-center pt-5">Welcome to the E-Commerce Application</h1>
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-6 mb-5">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title text-center">Register</h2>
//               <p className="card-text">
//                 Register an account to access all the features of our E-Commerce platform.
//               </p>
//               <div className="text-center">
//                 <Link to="/register" className="btn btn-primary">Register</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h2 className="card-title text-center">Login</h2>
//               <p className="card-text">
//                 Already have an account? Login to continue your shopping experience.
//               </p>
//               <div className="text-center">
//                 <Link to="/login" className="btn btn-primary">Login</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div
//       className="container-fluid"
//     >
//       <h1 className="text-center pt-5 mb-5" >Welcome to the E-Commerce Application</h1>
//       <div className="row h-100 d-flex align-items-center p-5 mt-5" >
//         <div className="col-md-12 mb-5 d-flex justify-content-center " >
//           <div className="card" style={{width:'40vw'}}>
//             <div className="card-body " >
//               <h2 className="card-title text-center">Register</h2>
//               <p className="card-text">
//                 Register an account to access all the features of our E-Commerce platform.
//               </p>
//               <div className="text-center">
//                 <Link to="/register" className="btn btn-primary">Register</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-12 d-flex justify-content-center" >
//           <div className="card" style={{width:'45vw'}}>
//             <div className="card-body">
//               <h2 className="card-title text-center">Login</h2>
//               <p className="card-text">
//                 Already have an account? Login to continue your shopping experience.
//               </p>
//               <div className="text-center">
//                 <Link to="/login" className="btn btn-primary">Login</Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const HomePage = () => {
  const url =
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80";
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%),url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div style={{ height: "15vh" }}>
        <h1 className="text-center text-white pt-4">
          Welcome to the Storekart Web Application
        </h1>
      </div>

      <div className="container-fluid" style={{ height: "75vh" }}>
        <div className="row h-100 d-flex">
          <div className="my-auto d-flex col-sm-12 col-lg-6">
            <div
              className="card mx-auto p-2"
              style={{
                width: "67%",
                color: "black",
                backgroundColor: "#F5F5F5",
              }}
            >
              <div className="card-body">
                <h1 className="card-title text-center">
                  Login to Your Account
                </h1>
                <p className="card-text">
                  Sign in to continue your shopping experience.
                </p>
                <div className="text-center">
                  <Link
                    to="/login"
                    className="btn"
                    style={{ color: "white", backgroundColor: "#4FC0D0" }}
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="my-auto d-flex col-sm-12 col-lg-6">
            <div
              className="card mx-auto p-2"
              style={{
                width: "67%",
                color: "white",
                backgroundColor: "#4FC0D0",
              }}
            >
              <div className="card-body">
                <h1 className="card-title text-center">New Here?</h1>
                <p className="card-text">
                  Sign up and discover all new products!.
                </p>
                <div className="text-center">
                  <Link
                    to="/register"
                    className="btn "
                    style={{ color: "black", backgroundColor: "#F5F5F5" }}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "10vh", backgroundColor: "none", color: "white" }}>
        <p className="pt-4 pb- 2 m-auto">
          © 2023 ShopNest. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
