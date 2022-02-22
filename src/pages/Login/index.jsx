import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import TextField from "../../components/TextField";
import { getListAccount } from "../../redux/actions";
import history from "../../util/history";
import { toastError, toastSuccess } from "./../../util/toast";
import "./styles.scss";

function Login({ getListAccount, listAccount }) {
  console.log("Log : listAccount", listAccount);

  useEffect(() => {
    getListAccount();
  }, []);

  const validate = Yup.object().shape({
    email: Yup.string().required("Required!").email("Invalid email!"),
    password: Yup.string().required("Required!"),
  });

  const handleSubmitForm = (newValues) => {
    const { email, password } = newValues;
    if (listAccount) {
      const findAccount = listAccount.find(
        (account) => account.email === email
      );
      if (findAccount) {
        if (findAccount.password === password) {
          localStorage.setItem("account", JSON.stringify(findAccount));
          history.push("/");
          toastSuccess("Login Successfully!");
        }
        else toastError("Wrong password!");
      } else toastError("Account doesn't exist!");
    } else toastError("Account doesn't exist!");
  };

  return (
    <div>
      <h1 className="mt-5 title">Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
              <TextField type="email" name="email" label="Email" />
              <TextField type="password" name="password" label="Password" />
              <p>
                Do not have an account? <a href="/signup">Sign up</a>
              </p>
              <button type="submit" className="btn btn-primary ms-3 float-end">
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
      <ToastContainer />
    </div>
  );
}

// export default Login;

const mapStateToProps = (state) => {
  const { listAccount } = state.accountReducer;
  return {
    listAccount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListAccount: (params) => dispatch(getListAccount(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
