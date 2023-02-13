import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "70px" }}>Customer field</h1>
      <div className="container-md">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </>
  );
};



// <section className="container-fluid my-5">
// <div className="row justify-content-start">
//   <form action="#" className="form">
//     <div className="col-md-2"></div>

//     <div className="col-md-4">
//       <div className="input-box">
//         <label>Full Name</label>
//         <input type="text" placeholder="Enter full name" required />
//       </div>

//       <div className="input-box">
//         <label>Email Address</label>
//         <input type="text" placeholder="Enter email address" required />
//       </div>

//       <div className="input-box">
//         <label>Country</label>
//         <div className="select-box">
//           <select>
//             <option hidden>Country</option>
//             <option>America</option>
//             <option>Japan</option>
//             <option>India</option>
//             <option>Nepal</option>
//           </select>
//         </div>
//       </div>

//       <div className="input-box">
//         <label>City</label>
//         <div className="select-box">
//           <select>
//             <option hidden>Country</option>
//             <option>America</option>
//             <option>Japan</option>
//             <option>India</option>
//             <option>Nepal</option>
//           </select>
//         </div>
//       </div>

//       <div className="input-box">
//         <label>Email Address</label>
//         <input type="text" placeholder="Enter email address" required />
//       </div>

//       <div className="input-box">
//         <label>City</label>
//         <div className="select-box">
//           <select>
//             <option hidden>Country</option>
//             <option>America</option>
//             <option>Japan</option>
//             <option>India</option>
//             <option>Nepal</option>
//           </select>
//         </div>
//       </div>

//       <div className="input-box">
//         <label>Email Address</label>
//         <input type="text" placeholder="Enter email address" required />
//       </div>
//     </div>

//     <div className="col-md-4">
//       <div className="input-box">
//         <label>Newwwwwwwwwww</label>
//         <input type="text" placeholder="Enter full name" required />
//       </div>

//       <div className="input-box">
//         <label>Full Name</label>
//         <input type="text" placeholder="Enter full name" required />
//       </div>

//       <div className="input-box">
//         <label>Full Name</label>
//         <input type="text" placeholder="Enter full name" required />
//       </div>

//       <div className="input-box">
//         <label>Full Name</label>
//         <input type="text" placeholder="Enter full name" required />
//       </div>

//       <div className="input-box">
//         <label>Full Name</label>
//         <input type="text" placeholder="Enter full name" required />
//       </div>

//       <div className="input-box">
//         <label>Full Name</label>
//         <input type="text" placeholder="Enter full name" required />
//       </div>
//     </div>
//     <div className="col-md-2"></div>

//     <button>Submit</button>
//   </form>
// </div>
// </section>

export default Home;
