import React from "react";
import "./styles.scss";
import { Route } from "react-router-dom";

function AuthenLayout({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(routerProps) => (
        <>
          <div className="container mt-3">
            <div className="row app__wrapper">
              <div className="col-md-5">
                <Component {...routerProps} />
              </div>
              <div className="col-md-7 mt-5">
                <img
                  src="https://signup.hive.io/images/members.svg"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </>
      )}
    />
  );
}

export default AuthenLayout;
