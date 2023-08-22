import React, { FC } from "react"; // Import FC type
import '../index.css'

interface LoadingSpinnerProps {
  size?: string;
  color?: string;
}


const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = "50px",
  color = "#3498db"
}) => {
  const spinnerStyle = {
    width: size,
    height: size,
    borderTopColor: color
  };

  return (
    <div className="loading-spinner">
      <div className="spinner" style={spinnerStyle}></div>
    </div>
  );
};

export default LoadingSpinner;