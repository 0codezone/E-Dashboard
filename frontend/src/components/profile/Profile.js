import React from "react";

function Profile() {
  const auth = localStorage.getItem("user");

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "50px 50px" }}>
        NAME : {JSON.parse(auth).name.toUpperCase()}
      </h1>
      <h2 style={{ textAlign: "center" }}>
        Contact : +91 {Math.floor(1000000000 + Math.random() * 9000000000)}
      </h2>

      <h2 style={{ textAlign: "center" }}>Address : xyz</h2>
    </div>
  );
}

export default Profile;
