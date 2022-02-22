import { ErrorMessage, useField } from "formik";
import React from "react";
import "./styles.scss";

function TextField({label, ...props}) {
    const [field, meta] = useField(props);
  return (
    <div className="my-2">
      <label htmlFor={field.name} className="d-flex text-start mb-1">{label}</label>
      <input
        type={field.type}
        name={field.name}
        className={`form-control mb-1 ${meta.error && meta.touched && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
        <ErrorMessage name={field.name} component="div" className={meta.error && meta.touched ? 'errors' : ''}/>
    </div>
  );
}

export default TextField;
