import React from "react";
import { useDispatch } from "react-redux";
import { ERROR } from "../redux/context/types";

class ErrorBoundaryBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.props.onError({
      header: "שגיאה באפליקציה",
      message: error.message || "אירעה שגיאה לא צפויה",
    });
  }

  render() {
    if (this.state.hasError) {
      return <h2>משהו השתבש. נסה לרענן את הדף.</h2>;
    }
    return this.props.children;
  }
}

const ErrorBoundary = ({ children }) => {
  const dispatch = useDispatch();

  const handleError = (errObj) => {
    dispatch({
      type: ERROR,
      payload: {
        header: errObj.header,
        message: errObj.message,
      },
    });
  };

  return <ErrorBoundaryBase onError={handleError}>{children}</ErrorBoundaryBase>;
};

export default ErrorBoundary;
