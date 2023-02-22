import React, { Fragment } from "react";
import "./Page.css";
import { useFormik } from "formik";
import { page1Schema, region, initialValuesPage1 } from "../schemas";

const BasicExample = (props) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValuesPage1,
      validationSchema: page1Schema,

      onSubmit: (value) => { },
    });

  return (
    <div>
      <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
        Tooltip on top
      </button>
      <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
        Tooltip on right
      </button>
      <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
        Tooltip on bottom
      </button>
      <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">
        Tooltip on left
      </button>
      <br />

      <button type="button" className="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
        Custom tooltip
      </button>
    </div>
  );
};

export default BasicExample;
