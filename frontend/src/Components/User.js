import React from "react";
import Navbar from "./Navbar";

const User = () => {
  const url =
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80";
  const userDescription =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, sapien vitae blandit condimentum, nulla est ultrices purus, vitae facilisis turpis urna id libero. In sagittis lectus non mattis maximus. Curabitur id eros diam. Nullam ut dui eget nibh sagittis hendrerit at et quam. Donec elementum viverra tortor, sit amet gravida ex vestibulum sed Fusce elementum tellus a urna euismod, sit amet commodo purus laoreet. Aliquam in tincidunt justo, in ullamcorper quam. Nulla facilisi. Curabitur tincidunt Fusce elementum tellus a urna euismod, sit amet commodo purus laoreet sem nec pharetra vestibulum.";

  const truncateDescription = (description) => {
    const words = description.split(" ");
    const maxWords = 70; // Set the desired maximum number of words
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  return (
    <div style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%),url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} >
    <Navbar/>
    <div className="container h-100">
  <div className="row my-auto" style={{ height: '85vh' }}>
    <div className="col-lg-8 col-md-12 col-sm-12 m-auto p-2">
      <div
        className="card p-3 m-auto"
        style={{
          maxWidth: '90%',
          minWidth: '25%',
          color: 'black',
          backgroundColor: '#F5F5F5',
        }}
      >
        <img
          src={localStorage.getItem('imageUrl')}
          className="card-img-top p-3 mx-auto rounded-circle"
          alt="User Avatar"
          style={{ width: '130px' }}
        />
        <div className="card-body">
          <p className="card-title" style={{ fontSize: '1rem' }}>
            User name: {localStorage.getItem('userName')}
          </p>
          <p className="card-text">Email: {localStorage.getItem('email')}</p>
          <p className="card-text">Phone: +91 9876543210</p>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

export default User;
