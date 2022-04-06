import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const ShowGender = function (props) {
  if (props.genderRate < 0) return "UNKNOWN ";
  if (props.genderRate === 0) return <BsGenderMale />;
  if (props.genderRate === 8) return <BsGenderFemale />;
  return (
    <>
      <BsGenderMale /> <BsGenderFemale />
    </>
  );
};

export default ShowGender;
