import React, { Fragment } from "react";
import "./Page.css";
import { useFormik } from "formik";
import { page1Schema, region, initialValuesPage1 } from "../schemas";
import CommonTooltip from "./CommonTooltip";

const BasicExample = (props) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValuesPage1,
      validationSchema: page1Schema,

      onSubmit: (value) => {},
    });

  return (
    <div>
      {/* <CommonTooltip /> */}
    </div>
  );
};

export default BasicExample;
