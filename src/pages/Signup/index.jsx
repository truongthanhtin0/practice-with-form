import { Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import TextField from "../../components/TextField";
import { createAccount } from './../../redux/actions';
import "./styles.scss";

function Signup({createAccount, dataCreate}) {

  const validate = Yup.object().shape({
    firstName: Yup.string()
      .required("Required!")
      .min(2, "Too short!")
      .max(15, "Too long!"),
    lastName: Yup.string()
      .required("Required!")
      .min(2, "Too short!")
      .max(20, "Too long!"),
    email: Yup.string().required("Required!").email("Invalid email!"),
    password: Yup.string().required("Required!").min(8, "Too short!"),
    confirmPassword: Yup.string()
      .required("Required!")
      .oneOf([Yup.ref("password"), null], "Password must match!"),
  });

  const handleSubmitForm = (newValues) => {
    createAccount(newValues);
  };

  const handleResetForm = () => {
    document.getElementById("form").reset();
  };

  return (
    <div>
      <h1 className="mt-5 title">Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
      >
        {(formikProps) => {
          //   const { errors, touched } = formikProps;
          //   console.log({ errors, touched });
          return (
            <Form id="form">
              <TextField type="text" name="firstName" label="First Name" />
              <TextField type="text" name="lastName" label="Last Name" />
              <TextField type="email" name="email" label="Email" />
              <TextField type="password" name="password" label="Password" />
              <TextField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
              />
              <p>
                Do you already have an account? <a href="/login">Login</a>
              </p>
              <div className="d-flex justify-content-end mt-3">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleResetForm}
                >
                  Reset
                </button>
                <button type="submit" className="btn btn-primary ms-3">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

// export default Signup;

const mapStateToProps = (state) => {
  const { dataCreate } = state.accountReducer;
  return {
    dataCreate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (params) => dispatch(createAccount(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

