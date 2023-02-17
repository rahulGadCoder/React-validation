import React, { useState, Fragment } from "react";
import plus from "./Icon/plus.png";
import minus from "./Icon/minus.png";
import "./Page.css";
import { NavLink } from "react-router-dom";

function Page2() {
  const [envGroupFields, setEnvGroupFields] = useState([
    {
      EnvironmentGroup: "",
      EnvironmentGroupHost: [
        {
          envGroupHostName: "",
        },
      ],
    },
  ]);

  const addInputField = (e) => {
    e.preventDefault();
    setEnvGroupFields([
      ...envGroupFields,
      {
        EnvironmentGroup: "",
        EnvironmentGroupHost: [{ envGroupHostName: "" }],
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...envGroupFields];
    rows.splice(index, 1);
    setEnvGroupFields(rows);
  };

  const handleChangeEnvGroup = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...envGroupFields];
    list[index][name] = value;
    setEnvGroupFields(list);
  };

  // Host Operations //
  const handleChangeEnvHost = (indexp, indexchild) => {
    return (e) => {
      setEnvGroupFields((prevState) => {
        return prevState.map((element, i) => {
          let newState = {};
          if (i === indexp) {
            newState = {
              ...element,
              EnvironmentGroupHost: [...element.EnvironmentGroupHost],
            };
            newState.EnvironmentGroupHost[indexchild].envGroupHostName =
              e.target.value;
            return newState;
          } else {
            return element;
          }
        });
      });
    };
  };

  const addHostNameField = (indexp) => {
    return (e) => {
      setEnvGroupFields((prevState) => {
        return prevState.map((element, i) => {
          if (i === indexp) {
            return {
              ...element,
              EnvironmentGroupHost: [
                ...element.EnvironmentGroupHost,
                { envGroupHostName: "" },
              ],
            };
          } else {
            return element;
          }
        });
      });
    };
  };

  const removeHostNameField = (indexp, indexchild) => {
    const rows = [...envGroupFields];
    rows[indexp].EnvironmentGroupHost.splice(indexchild, 1);
    setEnvGroupFields(rows);
  };

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

          {envGroupFields.map((data, indexp) => {
            console.log(envGroupFields);
            const { EnvironmentGroup, EnvironmentGroupHost } = data;
            return (
              <div key={indexp}>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="envgroupId" className="form-label">
                      Environment Group Name
                    </label>
                    <input
                      type="text"
                      onChange={(evnt) => handleChangeEnvGroup(indexp, evnt)}
                      value={EnvironmentGroup}
                      name="EnvironmentGroup"
                      className="form-control"
                      placeholder="Env Group"
                    />
                  </div>

                  {EnvironmentGroupHost.map((element, index) => {

                    return (
                      <Fragment key={index}>
                        {index > 0 ? (<div className="col-md-6"></div>) : ''}
                        <div className="col-md-4">
                          <label htmlFor="envhostname" className="form-label">
                            Environment Group Hostname
                          </label>
                          <input
                            type="text"
                            value={element.envGroupHostName}
                            onChange={handleChangeEnvHost(indexp, index)}
                            name="envGroupHostName"
                            className="form-control"
                            placeholder="Env Host Name"
                          />
                        </div>

                        <div className="col-md-2">
                          {EnvironmentGroupHost.length !== 1 && (
                            <img
                              className="img-icon"
                              src={minus}
                              alt="remove"
                              onClick={() => removeHostNameField(indexp, index)}
                            />
                          )}
                          {EnvironmentGroupHost.length - 1 === index && (
                            <img
                              className="img-icon"
                              style={{ marginLeft: "15px" }}
                              src={plus}
                              id={indexp}
                              onClick={addHostNameField(indexp)}
                              alt="Add"
                            />
                          )}
                        </div>
                      </Fragment>
                    );
                  })}
                </div>

                <div className="row" style={{ marginTop: "30px" }}>
                  <div className="col-md-7"></div>
                  <div className="col-md-5">
                    {envGroupFields.length !== 1 && (
                      <button
                        type="button"
                        className="btn btn-primary me-4"
                        onClick={() => removeInputFields(indexp)}
                      >
                        <i className="fa fa-minus me-2"></i>Remove
                      </button>
                    )}
                    {envGroupFields.length - 1 === indexp && (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e) => {
                          addInputField(e);
                        }}
                      >
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

            <NavLink to="/">
              <button type="submit" className="btn btn-primary">
                Previous
              </button>
            </NavLink>

            <NavLink to="/step2"> <button type="submit" className="btn btn-next btn-primary"> Next </button></NavLink>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Page2;
