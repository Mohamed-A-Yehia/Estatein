import { useNavigate } from "react-router";
import warningImage from "../assets/Warning.png";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <img src={warningImage} className="h-40" alt="Warning Image" />
      <p className="text-grey-10 font-semibold">Page Is Not Found</p>
      <button
        className="bg-grey-08 text-white-90 mt-2.5 cursor-pointer rounded-sm p-2.5"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}

export default Error;
