import React from "react";
import swal from "sweetalert";

const Premium = () => {
  swal("Congratulations!", "Your Premium service is active now", "success");
  return (
    <div>
      <h1 className=" text-3xl text-center">This is Premium Page</h1>
    </div>
  );
};

export default Premium;
