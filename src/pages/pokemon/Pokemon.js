import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Pokemon = function () {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => !params.name && navigate("/"), []);
  return <></>;
};

export default Pokemon;
