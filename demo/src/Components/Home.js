import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="container-fluid">
        <div className="row justify-content-start">
          <form action="#" className="form">
            <div className="col-2"></div>

            <div className="col-4">
              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" required />
              </div>

              <div className="input-box">
                <label>Email Address</label>
                <input type="text" placeholder="Enter email address" required />
              </div>

              <div className="input-box">
                <label>Country</label>
                <div className="select-box">
                  <select>
                    <option hidden>Country</option>
                    <option>America</option>
                    <option>Japan</option>
                    <option>India</option>
                    <option>Nepal</option>
                  </select>
                </div>
              </div>

              <div className="input-box">
                <label>City</label>
                <div className="select-box">
                  <select>
                    <option hidden>Country</option>
                    <option>America</option>
                    <option>Japan</option>
                    <option>India</option>
                    <option>Nepal</option>
                  </select>
                </div>
              </div>

              <div className="input-box">
                <label>Email Address</label>
                <input type="text" placeholder="Enter email address" required />
              </div>

              <div className="input-box">
                <label>City</label>
                <div className="select-box">
                  <select>
                    <option hidden>Country</option>
                    <option>America</option>
                    <option>Japan</option>
                    <option>India</option>
                    <option>Nepal</option>
                  </select>
                </div>
              </div>

              <div className="input-box">
                <label>Email Address</label>
                <input type="text" placeholder="Enter email address" required />
              </div>
            </div>

            <div className="col-4">
              <div className="input-box">
                <label>Newwwwwwwwwww</label>
                <input type="text" placeholder="Enter full name" required />
              </div>

              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" required />
              </div>

              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" required />
              </div>

              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" required />
              </div>

              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" required />
              </div>

              <div className="input-box">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" required />
              </div>
            </div>
            <div className="col-2"></div>

            <button>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
