import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../redux/actions/errorActions";

export const ErrorBox = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.err);

  return (
    error.message && (
      <div className="error-box">
        <h3>{error.header}</h3>
        <p>{error.message}</p>
        <button onClick={() => dispatch(clearError())}>X</button>
      </div>
    )
  );
};
