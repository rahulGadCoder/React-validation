import React from "react";
import plus from "./Icon/plus.png";
import minus from "./Icon/minus.png";
import "./Page1.css";

function Page2() {
  return (
    <div>
      <div className="container" style={{ marginTop: "70px" }}>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="gcpprojectId" className="form-label">
              Apigee Organization Key Ring Name
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-6"></div>

          <div className="col-md-6">
            <label htmlFor="gcpprojectId" className="form-label">
              Apigee Organization Key Ring Rotation Period
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-6">
            <label htmlFor="billingId" className="form-label">
              Apigee Instance Key Ring Rotation Period
            </label>
            <input type="text" className="form-control" id="billingId" />
          </div>

          <h3>Environment Group</h3>
          <div className="col-md-6">
            <label htmlFor="gcpprojectId" className="form-label">
              Apigee Organization Key Ring Rotation Period
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>

          <div className="col-md-4">
            <label htmlFor="gcpprojectId" className="form-label">
              Apigee Organization Key Ring Rotation Period
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-2">
            <img className="img-icon" src={minus} alt="remove" />
          </div>

          <div className="col-md-6"></div>
          <div className="col-md-4">
            <label htmlFor="gcpprojectId" className="form-label">
              Apigee Organization Key Ring Rotation Period
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-2">
            <span>
              <img className="img-icon" src={minus} alt="remove" />
              <img
                className="img-icon"
                style={{ marginLeft: "15px" }}
                src={plus}
                alt="Add"
              />
            </span>
          </div>

          <div className="col-md-8"></div>

          <div className="col-md-5">
            <button type="button" className="btn btn-primary btn-lg me-4">Remove</button>
            <button type="button" className="btn btn-secondary btn-lg">Add More</button>
          </div>

          <div>
            <button type="submit" className="btn btn-next btn-primary">Next</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Page2;
