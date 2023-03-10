import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Page.css";
import { useFormik } from "formik";
import { page1Schema, region, initialValuesPage1, desc } from "../schemas";
import Progressbar from "./ProgressBar";
import CommonTooltip from "./CommonTooltip";

const Page1 = () => {
  const progress = 25;
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: localStorage.getItem("step1Object") === null ? initialValuesPage1 : JSON.parse(localStorage.getItem('step1Object')),
      validationSchema: page1Schema,
      onSubmit: (value) => {
        localStorage.setItem("step1Object", JSON.stringify(value));
        navigate("/step1");
      },
    });

  useEffect(() => {
      localStorage.clear();
  }, []);

  return (
    <div className="container-md my-4 container-background">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="project_id" className="form-label">
              GCP Project Id
            </label>
            <input
              type="text"
              name="project_id"
              autoComplete="off"
              placeholder="Gcp Project Id"
              value={values.project_id}
              onChange={(e) => {
                handleChange(e);
              }}
              onBlur={handleBlur}
              className="form-control searchbar"
              id="project_id"
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.project_id} />
            </span>
            {errors.project_id && touched.project_id ? (
              <p className="form-error">{errors.project_id}</p>
            ) : null}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group toolicon">
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
            <span className="tool-icon">
              <CommonTooltip title={desc.billing_account} />
            </span>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="projectparent" className="form-label">
              Project Parent
            </label>
            <input
              type="text"
              name="project_parent"
              autoComplete="off"
              placeholder="Project Parent"
              value={values.project_parent}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              id="projectparent"
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.project_parent} />
            </span>
          </div>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-5 form-check" style={{ marginTop: "54px" }}>
          <input
            className="form-check-input"
            type="checkbox"
            name="project_create"
            checked={values.project_create}
            value={values.project_create}
            onChange={handleChange}
            onBlur={handleBlur}
            id="flexCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Create project
          </label>
        </div>

        <div className="col-md-6">
          <label htmlFor="region" className="form-label">
            Region
          </label>
          <select
            id="region"
            name="apigee_instance_region"
            onChange={handleChange}
            value={values.apigee_instance_region}
            className="form-select"
          >
            {region.map((element) => {
              const { label, value } = element;
              return (
                <option value={value} key={label}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-6"></div>

        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="apigeenetwork" className="form-label">
              Apigee Network Name
            </label>
            <input
              type="text"
              name="apigee_network_name"
              autoComplete="off"
              placeholder="Apigee Network Name"
              className="form-control"
              id="apigeenetwork"
              value={values.apigee_network_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.apigee_network_name} />
            </span>
            {errors.apigee_network_name && touched.apigee_network_name ? (
              <p className="form-error">{errors.apigee_network_name}</p>
            ) : null}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="apigeesupportnetwork" className="form-label">
              Apigee Support Network Name
            </label>
            <input
              type="text"
              className="form-control"
              name="apigee_network_routing_mode"
              autoComplete="off"
              placeholder="Apigee Support Network Name"
              id="apigeesupportnetwork"
              value={values.apigee_network_routing_mode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.apigee_network_routing_mode} />
            </span>
            {errors.apigee_network_routing_mode &&
              touched.apigee_network_routing_mode ? (
              <p className="form-error">{errors.apigee_network_routing_mode}</p>
            ) : null}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="peeringrange" className="form-label">
              Apigee Network Peering Range
            </label>
            <input
              type="text"
              className="form-control"
              id="peeringrange"
              name="apigee_network_main_peering_range"
              autoComplete="off"
              placeholder="Apigee Network Peering Range"
              value={values.apigee_network_main_peering_range}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.apigee_network_routing_mode} />
            </span>
            {errors.apigee_network_main_peering_range &&
              touched.apigee_network_main_peering_range ? (
              <p className="form-error">
                {errors.apigee_network_main_peering_range}
              </p>
            ) : null}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="prefixlength" className="form-label">
              Apigee Network Prefix Length
            </label>
            <input
              type="number"
              className="form-control"
              id="prefixlength"
              min="1"
              max="22"
              name="apigee_network_main_peering_range_prefix_length"
              autoComplete="off"
              placeholder="Apigee Network Prefix Length"
              value={values.apigee_network_main_peering_range_prefix_length}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.apigee_network_main_peering_range_prefix_length} />
            </span>
            {errors.apigee_network_main_peering_range_prefix_length &&
              touched.apigee_network_main_peering_range_prefix_length ? (
              <p className="form-error">
                {errors.apigee_network_main_peering_range_prefix_length}
              </p>
            ) : null}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="peeringrange1" className="form-label">
              Apigee Network Peering Range
            </label>
            <input
              type="text"
              className="form-control"
              id="peeringrange1"
              name="apigee_network_support_peering_range"
              autoComplete="off"
              placeholder="Apigee Network Peering Range"
              value={values.apigee_network_support_peering_range}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.apigee_network_main_peering_range_prefix_length} />
            </span>
            {errors.apigee_network_support_peering_range &&
              touched.apigee_network_support_peering_range ? (
              <p className="form-error">
                {errors.apigee_network_support_peering_range}
              </p>
            ) : null}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group toolicon">
            <label htmlFor="prefixlength1" className="form-label">
              Apigee Network Prefix Length
            </label>
            <input
              type="number"
              className="form-control"
              id="prefixlength1"
              min="1"
              max="28"
              name="apigee_network_support_peering_range_prefix_length"
              autoComplete="off"
              placeholder="Apigee Network Prefix Length"
              value={values.apigee_network_support_peering_range_prefix_length}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="tool-icon">
              <CommonTooltip title={desc.apigee_network_main_peering_range_prefix_length} />
            </span>
            {errors.apigee_network_support_peering_range_prefix_length &&
              touched.apigee_network_support_peering_range_prefix_length ? (
              <p className="form-error">
                {errors.apigee_network_support_peering_range_prefix_length}
              </p>
            ) : null}
          </div>
        </div>

        <div className="col-md-10 mrg-top">
          <Progressbar progress={progress} />
        </div>
        <div className="col-md-2">
          <button
            type="submit"
            data-toggle="tooltip"
            data-placement="right"
            title="Tooltip on right"
            className="btn btn-next btn-primary"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page1;
