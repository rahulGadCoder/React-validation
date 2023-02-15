import React, { useState } from "react";
import plus from "./Icon/plus.png";
import minus from "./Icon/minus.png";
import "./Page1.css";

function Page2() {
  const [inputFields, setInputFields] = useState([
    {
      EnvironmentGroup: "",
      EnvironmentGroupHost: "",
    },
  ]);

  const addInputField = (e) => {
    e.preventDefault();

    setInputFields([
      ...inputFields,
      {
        EnvironmentGroup: "",
        EnvironmentGroupHost: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  // Host Operations //

  const addHostNameField = () =>{

  }

  const removeHostNameField =()=>{

  }

  return (
    <div>
      <div className="container container-background">
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

          {/* <h4>Environment Group</h4>
          <div className="col-md-6">
            <label htmlFor="envgroupId" className="form-label">
              Environment Group Name
            </label>
            <input type="text" className="form-control" id="envgroupId" />
          </div>

          <div className="col-md-4">
            <label htmlFor="envhostname" className="form-label">
              Environment Group Hostname
            </label>
            <input type="text" className="form-control" id="envhostname" />
          </div>
          <div className="col-md-2">
            <img className="img-icon" src={minus} alt="remove" />
            <img
              className="img-icon"
              style={{ marginLeft: "15px" }}
              src={plus}
              alt="Add"
            />
          </div> */}

          {inputFields.map((data, index) => {
            const { EnvironmentGroup, EnvironmentGroupHost } = data;
            return (
              <div>
                <div className="row" key={index}>
                  <div className="col-md-6">
                    <label htmlFor="envgroupId" className="form-label">
                      Environment Group Name
                    </label>
                    <input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={EnvironmentGroup}
                      name="EnvironmentGroup"
                      className="form-control"
                      placeholder="Env Group"
                    />
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="envhostname" className="form-label">
                      Environment Group Hostname
                    </label>
                    <input
                      type="text"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={EnvironmentGroupHost}
                      name="EnvironmentGroupHost"
                      className="form-control"
                      placeholder="Env Host Name"
                    />
                  </div>

                  <div className="col-md-2">
                    {inputFields.length !== 1 && (
                      <img
                        className="img-icon"
                        src={minus}
                        alt="remove"
                        onClick={() => removeHostNameField(index)}
                      />
                    )}
                    {inputFields.length - 1 === index && (
                      <img
                        className="img-icon"
                        style={{ marginLeft: "15px" }}
                        src={plus}
                        onClick={(e) => {addHostNameField(e);}}
                        alt="Add"
                      />
                    )}
                  </div>
                </div>

                <div className="row" style={{marginTop: '30px'}}>
                  <div className="col-md-7"></div>
                  <div className="col-md-5">
                  {inputFields.length !== 1 && (<button type="button" className="btn btn-primary me-4" onClick={() => removeInputFields(index)}>
                      <i className="fa fa-minus me-2"></i>Remove
                    </button> )}
                    {inputFields.length - 1 === index && (  
                    <button type="button" className="btn btn-primary" onClick={(e) => {addInputField(e);}}>
                      <i className="fa fa-plus me-2"></i>Add More
                    </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}


          <div className="col-md-10"></div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary">
              Previous
            </button>
            <button type="submit" className="btn btn-next btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page2;
