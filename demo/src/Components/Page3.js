import React, { useState, useEffect, Fragment } from "react";
import minus from "./Icon/minus.png";
import plus from "./Icon/plus.png";
import "./Page.css";
import { useFormik } from "formik";
import { page3Schema, initialValuesPage3, desc } from "../schemas";
import { useNavigate } from "react-router-dom";
import Progressbar from "./ProgressBar";
import CommonTooltip from "./CommonTooltip";

function Page3() {
  const progress = 75;
  const navigate = useNavigate();

  const defaultState =
    localStorage.getItem("step3Object") === null
      ? initialValuesPage3.envs
      : JSON.parse(localStorage.getItem("step3Object")).envsStored;

  const [envFields, setEnvFields] = useState(defaultState);
  const [envGroupName, setEnvGroupName] = useState([]);
  const [selectedGroupName, setSelectedGroupName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("step2Object") != null) {
      const hostDropDown = JSON.parse(
        localStorage.getItem("step2Object")
      ).envgroupsStored;
      hostDropDown.forEach((element, index) => {
        element.label = "";
        element.name = "";
        element.name = element.EnvironmentGroup;
        element.label = element.EnvironmentGroup;
        initialValuesPage3.envs[0].EnvironmentGroups[0].EnvironmentGroupName =
          hostDropDown[0].EnvironmentGroup;
      });
      setEnvGroupName(hostDropDown);
    }
  }, []);

  const onPevious = () => {
    values.envsStored = envFields;
    localStorage.setItem("step3Object", JSON.stringify(values));
    navigate("/step1");
  };

  const { values, handleBlur, handleSubmit } =
    useFormik({
      initialValues:
        localStorage.getItem("step3Object") === null
          ? initialValuesPage3
          : JSON.parse(localStorage.getItem("step3Object")),
      validationSchema: page3Schema,

      onSubmit: (values, action) => {
        values.envsStored = envFields;
        localStorage.setItem("step3Object", JSON.stringify(values));
        navigate("/step3");
      },
    });

  const addInputField = (e) => {
    e.preventDefault();
    setEnvFields([
      ...envFields,
      {
        EnvironmentDescription: "",
        EnvironmentName: "",
        EnvironmentDisplayName: "",
        EnvironmentGroups: [
          { EnvironmentGroupName: envGroupName ? envGroupName[0].EnvironmentGroup : "" } //not sure about EnvironmentGroup
        ],
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...envFields];
    rows.splice(index, 1);
    setEnvFields(rows);
  };

  const handleChangeEnvGroup = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...envFields];
    list[index][name] = value;
    setEnvFields(list);
  };

  // Host Operations //
  const handleChangeEnvHost = (indexp, indexchild) => {
    return (e) => {
      setSelectedGroupName(e.target.value);
      setEnvFields((prevState) => {
        return prevState.map((element, i) => {
          let newState = {};
          if (i === indexp) {
            newState = {
              ...element,
              EnvironmentGroups: [...element.EnvironmentGroups],
            };
            newState.EnvironmentGroups[indexchild].EnvironmentGroupName =
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
      setEnvFields((prevState) => {
        return prevState.map((element, i) => {
          if (i === indexp) {
            return {
              ...element,
              EnvironmentGroups: [
                ...element.EnvironmentGroups,
                { EnvironmentGroupName: "" },
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
    const rows = [...envFields];
    rows[indexp].EnvironmentGroups.splice(indexchild, 1);
    setEnvFields(rows);
  };

  return (
    <div className="container container-background">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="card card-body">
          <h2>Environments</h2>
          {envFields.map((data, indexp) => {
            const { EnvironmentDescription, EnvironmentGroups, EnvironmentName, EnvironmentDisplayName } = data;
            return (
              <div key={indexp}>
                <div className="row mrg-bottom-10 mrg-top-10">
                  <div className="col-md-6">
                    <div className="form-group toolicon">
                      <label htmlFor="EnvironmentName" className="form-label">
                        Environment Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="EnvironmentName"
                        name="EnvironmentName"
                        autoComplete="off"
                        placeholder="Environment Name"
                        value={EnvironmentName}
                        onChange={(evnt) => handleChangeEnvGroup(indexp, evnt)}
                        onBlur={handleBlur}
                      />
                      <span className="tool-icon">
                        <CommonTooltip title={desc.environments_name} />
                      </span>
                      {/* {errors.EnvironmentName && touched.EnvironmentName ? (
                        <p className="form-error">{errors.EnvironmentName}</p>
                      ) : null} */}
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="form-group toolicon">
                      <label htmlFor="EnvironmentDisplayName" className="form-label">
                        Environment Display Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="EnvironmentDisplayName"
                        name="EnvironmentDisplayName"
                        autoComplete="off"
                        placeholder="Environment Display Name"
                        value={EnvironmentDisplayName}
                        onChange={(evnt) => handleChangeEnvGroup(indexp, evnt)}
                        onBlur={handleBlur}
                      />
                      <span className="tool-icon">
                        <CommonTooltip title={desc.EnvironmentDisplayName} />
                      </span>
                      {/* {errors.EnvironmentDisplayName && touched.EnvironmentDisplayName ? (
                        <p className="form-error">{errors.EnvironmentDisplayName}</p>
                      ) : null} */}
                    </div>
                  </div>
                  <div className="col-md-1"></div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group toolicon">
                      <label htmlFor="envgroupId" className="form-label">
                        Environment Description
                      </label>
                      <input
                        type="text"
                        onChange={(evnt) => handleChangeEnvGroup(indexp, evnt)}
                        value={EnvironmentDescription}
                        name="EnvironmentDescription"
                        className="form-control"
                        placeholder="Environment Description"
                        onBlur={handleBlur}
                      />
                      <span className="tool-icon">
                        <CommonTooltip title={desc.envgroups} />
                      </span>
                    </div>
                  </div>

                  {EnvironmentGroups.map((element, index) => {
                    return (
                      <Fragment key={index}>
                        {index > 0 && <div className="col-md-6"></div>}
                        <div className="col-md-4">
                          <label
                            htmlFor="EnvironmentGroupName"
                            className="form-label"
                          >
                            Environment Group
                          </label>
                          <select
                            id="EnvironmentGroupName"
                            value={element.EnvironmentGroupName}
                            onChange={handleChangeEnvHost(indexp, index)}
                            name="EnvironmentGroupName"
                            className="form-select"
                          >
                            {envGroupName.map((element) => {
                              const { label, value } = element;
                              return (
                                <option
                                  value={value}
                                  key={label}
                                  disabled={
                                    +index && selectedGroupName === label
                                  }
                                >
                                  {label}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="col-md-2">
                          {EnvironmentGroups.length !== 1 && (
                            <img
                              className="img-icon"
                              src={minus}
                              alt="remove"
                              onClick={() => removeHostNameField(indexp, index)}
                            />
                          )}
                          {EnvironmentGroups.length - 1 === index && (
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
                    {envFields.length !== 1 && (
                      <button
                        type="button"
                        className="btn btn-primary me-4"
                        onClick={() => removeInputFields(indexp)}
                      >
                        <i className="fa fa-minus me-2"></i>Remove
                      </button>
                    )}
                    {envFields.length - 1 === indexp && (
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
        </div>
        <div className="row">
          <div className="col-md-10 mrg-top">
            <Progressbar progress={progress} />
          </div>
          <div className="col-md-2 mrg-top-10">
            <button onClick={onPevious} type="button" className="btn btn-primary">
              Previous
            </button>
            <button type="submit" className="btn btn-next btn-primary">
              Next
            </button>
          </div>
        </div>
      </form>


    </div>
  );
}

export default Page3;
