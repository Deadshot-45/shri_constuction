import React, { useState } from "react";

const ErrorOutOfBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error, errorInfo) => {
    console.error("Error caught in Error Boundary:", error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Something went wrong.</h1>
        <p>Please try again later.</p>
        <p>If the problem persists, please contact support.</p>
        <p>Thank you for your understanding.</p>

        <Link to="/">Go to Home</Link>
        <p>or</p>
        <Link to="/contact">Contact Support</Link>  
      </div>
    );
  }

  return (
    <ErrorBoundaryWrapper onError={handleError}>
      {children}
    </ErrorBoundaryWrapper>
  );
};

const ErrorBoundaryWrapper = ({ onError, children }) => {
  try {
    return children;
  } catch (error) {
    onError(error, { componentStack: "ErrorBoundaryWrapper" });
    return null;
  }
};

export default ErrorOutOfBoundary;
