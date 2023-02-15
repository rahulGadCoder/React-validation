import React, {useState} from "react";
import minus from "./Icon/minus.png";
import plus from "./Icon/plus.png";
import "./Page1.css";

function Page3() {

const [EnvGroup, SetEnvGroup] = useState([{enviromentGroup: ''}])

  return (
    <div>
      <div className="container" style={{ marginTop: "70px" }}>
        <form className="row g-3">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <label htmlFor="gcpprojectId" className="form-label">
              Environment Name
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-4">
            <label htmlFor="gcpprojectId" className="form-label">
            Environment Display Name
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-2"></div>

          <div className="col-md-2"></div>
          <div className="col-md-4">
            <label htmlFor="gcpprojectId" className="form-label">
             Environment Description
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-4">
            <label htmlFor="EnvGroup" className="form-label">Environment Group</label>
            {EnvGroup.map((element, index)=>{
                
            })}


            <select id="EnvGroup" className="form-select">
              <option defaultValue>Choose...</option>
              <option>...</option>
            </select>
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

          <div className="col-md-4">
            <button type="button" className="btn btn-primary btn-lg me-4">
              Remove
            </button>
            <button type="button" className="btn btn-secondary btn-lg">
              Add More
            </button>
          </div>

          <div className="col-md-8"></div>
          <div className="col-md-4">
            <button type="button" className="btn btn-primary me-4">
              Previous
            </button>
            <button type="button" className="btn btn-secondary">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page3;
