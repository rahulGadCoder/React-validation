import React, { useState, useEffect, Fragment } from "react";
import minus from "./Icon/minus.png";
import plus from "./Icon/plus.png";
import "./Page.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { page3Schema, initialValuesPage3 } from "../schemas";
import { useNavigate } from "react-router-dom";

function Page3() {
  const navigate = useNavigate()

  useEffect(() => {
    const step2Object = JSON.parse(localStorage.getItem('step2Object'));
    // console.log('step2Object', step2Object);
  }, [])


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValuesPage3,
    validationSchema: page3Schema,

    onSubmit: (values, action) => {
      const { envgroups, environments } = values;
      envGroupFields.forEach(element => {
        envgroups.push(element.EnvironmentGroup);
        element.EnvironmentGroupHost.forEach(element => {
          environments.push(element.envGroupHostName);
        });
      });
      localStorage.setItem('step3Object', JSON.stringify(values));
      navigate("/step3");
    },
  })

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
    <div className="container container-background">
      <form className="row g-3" onSubmit={handleSubmit}>
        <h2>Environments</h2>
        <div className="col-md-6">
          <label htmlFor="env_name" className="form-label">
            Environment Name
          </label>
          <input type="text" className="form-control" id="env_name"
            name="env_name" autoComplete="off" placeholder="Environment Name"
            value={values.env_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.env_name && touched.env_name ? <p className="form-error">{errors.env_name}</p> : null}
        </div>
        <div className="col-md-6">
          <label htmlFor="env_display_name" className="form-label">
            Environment Display Name
          </label>
          <input type="text" className="form-control" id="env_display_name"
            name="env_display_name" autoComplete="off" placeholder="Environment Name"
            value={values.env_display_name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.env_display_name && touched.env_display_name ? <p className="form-error">{errors.env_display_name}</p> : null}
        </div>

        {envGroupFields.map((data, indexp) => {
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
                    onBlur={handleBlur}
                  />
                </div>

                {EnvironmentGroupHost.map((element, index) => {
                  return (
                    <Fragment key={index}>
                      {index > 0 && (<div className="col-md-6"></div>)}
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
                          onBlur={handleBlur}
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
          <NavLink to="/step1">
            <button type="submit" className="btn btn-primary">Previous</button>
          </NavLink>
          <button type="submit" className="btn btn-next btn-primary">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Page3;
