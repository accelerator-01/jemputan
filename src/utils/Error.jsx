import { useRouteError } from "react-router-dom";
import DirectLink from "./DirectLink";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <DirectLink to="-1">&larr; Go back</DirectLink>
    </div>
  );
}

export default Error;
