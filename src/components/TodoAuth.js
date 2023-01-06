import React, { Fragment, useEffect, useState } from "react";
import TodoAuthContent from "./TodoAuthContent";
import jwt_decode from "jwt-decode";
import { motion } from "framer-motion";

// This component will do the Google authentication.

function TodoAuth() {

  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    //console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    //console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "622863485553-0dci5p14do90c9qb3t1tno8amv6o3fgn.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);
  return (
    <Fragment>
      {Object.keys(user).length === 0 && (
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Sign in to get Started !
        </motion.h1>
      )}
      <div id="signInDiv"></div>
      {Object.keys(user).length !== 0 && (
        <TodoAuthContent onAuthentication={handleSignOut} />
      )}
    </Fragment>
  );
}

export default TodoAuth;
