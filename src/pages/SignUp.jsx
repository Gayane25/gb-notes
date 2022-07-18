import React from "react";

import SignUpForm from "../components/SignUpForm";

function SignUp() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "180px",
      }}
    >
      <SignUpForm />
    </div>
  );
}

export default SignUp;
