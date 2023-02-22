import React, { useEffect } from "react";
import "./Page.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { page4Schema, initialValuesPage4, desc } from "../schemas";
import Progressbar from "./ProgressBar";
import CommonTooltip from "./CommonTooltip";

function Page4() {
  const progress = 100;
  useEffect(() => {
    const step4Object = JSON.parse(localStorage.getItem("step4Object"));

    console.log('step4Object', step4Object);
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValuesPage4,
      validationSchema: page4Schema,
      onSubmit: (values, action) => {
        console.log("values", values);
        localStorage.setItem("step4Object", JSON.stringify(values));
        finalObj();
      },
    });

  const finalObj = () => {
    const step1Object = JSON.parse(localStorage.getItem("step1Object"));
    const step2Object = JSON.parse(localStorage.getItem("step2Object"));
    const step3Object = JSON.parse(localStorage.getItem("step3Object"));
    const step4Object = JSON.parse(localStorage.getItem("step4Object"));
    const finaljson = {};
    // Step 1//
    finaljson.project_id = step1Object.project_id;
    finaljson.apigee_instance_region = step1Object.apigee_instance_region;
    finaljson.apigee_network_main_peering_range = step1Object.apigee_network_main_peering_range;
    finaljson.apigee_network_main_peering_range_prefix_length = step1Object.apigee_network_main_peering_range_prefix_length;
    finaljson.apigee_network_name = step1Object.apigee_network_name;
    finaljson.apigee_network_routing_mode = step1Object.apigee_network_routing_mode;
    finaljson.apigee_network_support_peering_range = step1Object.apigee_network_support_peering_range;
    finaljson.apigee_network_support_peering_range_prefix_length = step1Object.apigee_network_support_peering_range_prefix_length;
    finaljson.billing_account = step1Object.billing_account;
    finaljson.project_create = step1Object.project_create;
    finaljson.project_parent = step1Object.project_parent;

    // Step 2 //
    finaljson.apigee_org_kms_keyring_name = step2Object.apigee_org_kms_keyring_name;
    finaljson.instance_key_rotation_period = step2Object.instance_key_rotation_period;
    finaljson.org_key_rotation_period = step2Object.org_key_rotation_period;
    finaljson.envgroups = step2Object.envgroups;
    finaljson.environments = step2Object.environments;

    // Step 3 //
    finaljson.env_display_name = step3Object.env_display_name;
    finaljson.env_name = step3Object.env_name;
    finaljson.envgroups = step3Object.envgroups;
    finaljson.environments = step3Object.environments;

    // Step 4 //
    finaljson.psc_ingress_network_name = step4Object.psc_ingress_network_name;
    finaljson.use_development_hostname = step4Object.use_development_hostname;
    finaljson.user_managed_certificate = step4Object.user_managed_certificate;
    finaljson.user_managed_certificate_location = step4Object.user_managed_certificate_location;

    const jsonObject = JSON.stringify(finaljson);
    const blob = new Blob([jsonObject], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'finaloutput.json';
    link.href = url;
    link.click();
    console.log('finaljson', finaljson);
  };

  return (
    <div className="container container-background">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="network" className="form-label">
              Private Service Connect Network Name
            </label>
            <input
              type="text"
              className="form-control"
              id="network"
              name="psc_ingress_network_name"
              autoComplete="off"
              placeholder="Private Service Connect Network Name"
              value={values.psc_ingress_network_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.psc_ingress_network_name} />
            </span>
            {errors.psc_ingress_network_name &&
              touched.psc_ingress_network_name ? (
              <p className="form-error">{errors.psc_ingress_network_name}</p>
            ) : null}
          </div>
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
          <label
            className="form-check-label"
            htmlFor="use_development_hostname"
          >
            Use Development Hostname
          </label>
        </div>

        <h4>Provide Custom Certificate for GSLB</h4>
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
          <label
            className="form-check-label"
            htmlFor="user_managed_certificate"
          >
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

        <div className="col-md-10 mrg-top">
          <Progressbar progress={progress} />
        </div>
        <div className="col-md-2">
          <NavLink to="/step2">
            <button type="submit" className="btn btn-primary">
              Previous
            </button>
          </NavLink>
          <button type="submit" className="btn btn-next btn-primary">
            view
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page4;
