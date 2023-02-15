import React, {useState} from "react";
import minus from "./Icon/minus.png";
import plus from "./Icon/plus.png";
import "./Page1.css";

function Page3() {

const [EnvGroup, SetEnvGroup] = useState([{enviromentGroup: ''}])

  return (
    <div>
      <div className="container container-background">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="gcpprojectId" className="form-label">
              Environment Name
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-6">
            <label htmlFor="gcpprojectId" className="form-label">
            Environment Display Name
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>

          <div className="col-md-6">
            <label htmlFor="gcpprojectId" className="form-label">
             Environment Description
            </label>
            <input type="text" className="form-control" id="gcpprojectId" />
          </div>
          <div className="col-md-4">
            <label htmlFor="EnvGroup" className="form-label">Environment Group</label>
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


          <div className="col-md-7"></div>
          <div className="col-md-5">
            <button  type="button" className="btn btn-primary me-4"><i className="fa fa-minus me-2"></i>Remove</button>
            <button  type="button" className="btn btn-primary"><i className="fa fa-plus me-2"></i>Add More</button>
          </div>


          <div className="col-md-10"></div>
          <div className="col-md-2">
           <button type="submit" className="btn btn-primary">Previous</button>
            <button type="submit" className="btn btn-next btn-primary">Next</button>
          </div>


        </form>
      </div>
    </div>
  );
}

export default Page3;
