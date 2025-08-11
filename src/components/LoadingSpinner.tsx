import { BeatLoader } from "react-spinners";

type props = {
  fallback?: boolean;
};

function LoadingSpinner({ fallback }: props) {
  return (
    <div
      className={`flex ${fallback ? "h-dvh" : "h-full"} items-center justify-center`}
    >
      <BeatLoader color="#7520E9" size={50} />
    </div>
  );
}

export default LoadingSpinner;
