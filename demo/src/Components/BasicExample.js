import React, { Fragment } from "react";
import "./Page.css";
import { useFormik } from "formik";
import { page1Schema, region, initialValuesPage1 } from "../schemas";

const BasicExample = (props) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValuesPage1,
      validationSchema: page1Schema,

      onSubmit: (value) => {},
    });

  return (
    <div className="container-md my-4 container-background">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="form-group input-group">
            <label htmlFor="project_id" className="form-label">
              GCP Project Id
            </label>
            <input
              name="project_id"
              autoComplete="off"
              placeholder="Gcp Project Id"
              value={values.project_id}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control border-end-0 border" type="search"
              id="project_id"
            />

            <span className="input-group-append">
              <button
                className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </span>

            {errors.project_id && touched.project_id ? (
              <p className="form-error">{errors.project_id}</p>
            ) : null}
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="billingId" className="form-label">
            Billing Account Id
          </label>
          <input
            type="text"
            name="billing_account"
            autoComplete="off"
            placeholder="Billing Account Id"
            value={values.billing_account}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            id="billingId"
          />
        </div>
      </form>

      <nav className="navbar navbar-default navbar-inverse">
        <form className="navbar-form navbar-right" role="search">
        <div className="input-group position-relative d-inline-flex align-items-center">
            <input className="form-control " type="text" defaultValue="" />
            <i className="bi bi-x-lg position-absolute" style={{right: '10px', cursor: 'pointer', zIndex: '100'}} ></i>
        </div>
        </form>
      </nav>
    </div>
  );
};

export default BasicExample;
