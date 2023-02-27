import React, { useState, useEffect, Fragment } from "react";
import plus from "./Icon/plus.png";
import minus from "./Icon/minus.png";
import "./Page.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { page2Schema, initialValuesPage2, desc } from "../schemas";
import Progressbar from "./ProgressBar";
import CommonTooltip from "./CommonTooltip";


function Page2() {
  const progress = 50;
  const navigate = useNavigate();

  const defaultState = localStorage.getItem("step2Object") === null ? initialValuesPage2.envgroups :
    JSON.parse(localStorage.getItem('step2Object')).envgroupsStored;
  const [envGroupFields, setEnvGroupFields] = useState(defaultState);

  useEffect(() => {

  }, [])

  const onPevious = () => {
    localStorage.setItem("step2Object", JSON.stringify(values));
    navigate("/");
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: localStorage.getItem("step2Object") === null ? initialValuesPage2 : JSON.parse(localStorage.getItem('step2Object')),
    validationSchema: page2Schema,
    onSubmit: (values, action) => {
      values.envgroupsStored = envGroupFields;
      localStorage.setItem('step2Object', JSON.stringify(values));
      navigate("/step2");
    },
  })


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
        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="apigeeorgringname" className="form-label">
              Apigee Organization Key Ring Name
            </label>
            <input type="text" id="apigeeorgringname"
              name="apigee_org_kms_keyring_name" autoComplete="off" placeholder="Apigee Organization Key Ring Name"
              value={values.apigee_org_kms_keyring_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control" />
            <span className="tool-icon">
              <CommonTooltip title={desc.apigee_org_kms_keyring_name} />
            </span>
            {errors.apigee_org_kms_keyring_name && touched.apigee_org_kms_keyring_name ? <p className="form-error">{errors.apigee_org_kms_keyring_name}</p> : null}
          </div>
        </div>
        <div className="col-md-6"></div>


        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="apigeeorgringperiod" className="form-label">
              Apigee Organization Key Ring Rotation Period
            </label>
            <input type="text" className="form-control" id="apigeeorgringperiod"
              name="org_key_rotation_period" autoComplete="off" placeholder="Apigee Organization Key Ring Rotation Period"
              value={values.org_key_rotation_period}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.org_key_rotation_period} />
            </span>
            {errors.org_key_rotation_period && touched.org_key_rotation_period ? <p className="form-error">{errors.org_key_rotation_period}</p> : null}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="instance_key_rotation_period" className="form-label">
              Apigee Instance Key Ring Rotation Period
            </label>
            <input type="text" className="form-control" id="keyrotationperiod"
              name="instance_key_rotation_period" autoComplete="off" placeholder="Apigee Instance Key Ring Rotation Period"
              value={values.instance_key_rotation_period}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.instance_key_rotation_period} />
            </span>
            {errors.instance_key_rotation_period && touched.instance_key_rotation_period ? <p className="form-error">{errors.instance_key_rotation_period}</p> : null}
          </div>
        </div>

        {envGroupFields.map((data, indexp) => {
          const { EnvironmentGroup, EnvironmentGroupHost } = data;
          return (
            <div className="card card-body" key={indexp}>
              <div className="row">
                <h2>Environment Group</h2>
                <div className="col-md-6">
                  <div className="form-group toolicon">
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
                    <span className="tool-icon">
                      <CommonTooltip title={desc.envgroups} />
                    </span>
                  </div>
                </div>

                {EnvironmentGroupHost.map((element, index) => {
                  return (
                    <Fragment key={index}>
                      {index > 0 ? (<div className="col-md-6"></div>) : ''}
                      <div className="col-md-4">
                        <div className="form-group toolicon">
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
                          <span className="tool-icon">
                            <CommonTooltip title={desc.envgroups} />
                          </span>
                        </div>
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

        <div className="col-md-10 mrg-top">
          <Progressbar progress={progress} />
        </div>
        <div className="col-md-2">
          <button onClick={onPevious} type="button" className="btn btn-primary">
            Previous
          </button>
          <button type="submit" className="btn btn-next btn-primary"> Next </button>
        </div>
      </form>
    </div>
  );
}

export default Page2;
