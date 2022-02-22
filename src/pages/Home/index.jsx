import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "../../util/history";
import "./styles.scss";

function Home(props) {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account"))
  );
  const handleLogout = () => {
    setAccount("");
    localStorage.removeItem("account");
  };

  return (
    <div>
      <h1 className="mt-5">HOME PAGE</h1>
      {account ? (
        <div>
          <h3>{`Xin chào, ${account.firstName} ${account.lastName}!`}</h3>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => history.push("/login")}
          >
            Login
          </button>
          <button
            type="button"
            class="btn btn-outline-primary ms-3"
            onClick={() => history.push("/signup")}
          >
            Sign Up
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Home;
