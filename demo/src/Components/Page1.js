import React from "react";
import "./Page1.css";

const Page1 = () => {
  return (
    <>
      <h1 className="text-center text-heading" >Apigee X Provisioning Assistance Wizard</h1>
      <div className="container-md my-4" style={{ backgroundColor: 'grey' }}>
        <form className="row g-3">

          <div className="col-md-6">
            <label htmlFor="gcpprojectId" className="form-label">GCP Project Id</label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-6">
            <label htmlFor="billingId" className="form-label">Billing Account Id</label>
            <input type="text" className="form-control" id="billingId" />
          </div>

          <div className="col-md-6">
            <label htmlFor="region" className="form-label">Region</label>
            <select id="region" className="form-select">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="apigeenetwork" className="form-label">Apigee Network Name</label>
            <input type="text" className="form-control" id="apigeenetwork" />
          </div>


          <div className="col-md-6">
            <label htmlFor="apigeenetworkrouting" className="form-label">Apigee Network Routing Mode</label>
            <select id="apigeenetworkrouting" className="form-select">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="peeringrange" className="form-label">Apigee Network Peering Range</label>
            <input type="text" className="form-control" id="peeringrange" />
          </div>

          <div className="col-md-6">
            <label htmlFor="peeringtype" className="form-label">Apigee Network Peering Type</label>
            <input type="text" className="form-control" id="peeringtype" />
          </div>
          <div className="col-md-6">
            <label htmlFor="prefix" className="form-label">Apigee Network Prefix Length</label>
            <input type="text" className="form-control" id="prefix" />
          </div>

          <div className="col-md-6">
            <label htmlFor="supportnetwork" className="form-label">Apigee Support Network Routing Mode</label>
            <select id="supportnetwork" className="form-select">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="peeringrange2" className="form-label">Apigee Network Peering Range</label>
            <input type="text" className="form-control" id="peeringrange2" />
          </div>


          <div className="col-md-6">
            <label htmlFor="supportpeering" className="form-label">Apigee Network Network Peering Type</label>
            <input type="text" className="form-control" id="supportpeering" />
          </div>
          <div className="col-md-6">
            <label htmlFor="prefixlength" className="form-label">Apigee Network Prfix Length</label>
            <input type="text" className="form-control" id="prefixlength" />
          </div>

          <div>
            <button type="submit" className="btn btn-next btn-primary">Next</button>
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

export default Page1;
