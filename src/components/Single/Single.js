import React from "react";
import { useParams } from "react-router";

const Single = (props) => {
  const { slug } = useParams();
  return (
    <div>
      <h1 className="text-center">Post Number: {slug}</h1>
    </div>
  );
};

export default Single;
