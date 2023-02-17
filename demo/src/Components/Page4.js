import React from "react";
import "./Page.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { page4Schema, initialValuesPage4 } from "../schemas";

function Page4() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValuesPage4,
    validationSchema: page4Schema,
    onSubmit: (values, action) => {
      console.log('values', values);
    },
  })


  return (
    <div>
      <div className="container container-background">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="network" className="form-label">
              Private Service Connect Network Name
            </label>
            <input type="text" className="form-control" id="network"
              name="psc_ingress_network_name" autoComplete="off" placeholder="Private Service Connect Network Name"
              value={values.psc_ingress_network_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.psc_ingress_network_name && touched.psc_ingress_network_name ? <p className="form-error">{errors.psc_ingress_network_name}</p> : null}
          </div>

          <div className="col-md-6 form-check" style={{ marginTop: "54px" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="use_development_hostname"
              name="use_development_hostname"
              value={values.use_development_hostname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="form-check-label" htmlFor="use_development_hostname">
              Use Development Hostname
            </label>
          </div>


          <h2>GSLB Certificate</h2>
          <div className="col-md-1"></div>
          <div className="col-md-5 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="user_managed_certificate"
              name="user_managed_certificate"
              value={values.user_managed_certificate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="form-check-label" htmlFor="user_managed_certificate">
              Provide Custom Certificate
            </label>
          </div>

          <div className="col-md-4">
            <label className="form-label">SSL Certificate Location</label>
            <div className="mb-3">
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
          <div className="col-md-2"></div>


          <div className="col-md-10"></div>
          <div className="col-md-2">
            <NavLink to="/step2">
              <button type="submit" className="btn btn-primary">Previous</button>
            </NavLink>

            <NavLink to="/step3">
              <button type="submit" className="btn btn-next btn-primary">view</button>
            </NavLink>
          </div>


        </form>
      </div>
    </div>
  );
}

export default Page4;
