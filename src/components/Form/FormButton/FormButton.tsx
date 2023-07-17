import Spinner from "../../Spinner/Spinner";
import React from "react";

interface FormButtonProps {
  onClick: () => void;
  submitting: boolean;
  label: string;
}

const FormButton = ({ onClick, submitting, label }: FormButtonProps) => {
  return (
    <button
      disabled={submitting}
      onClick={onClick}
      className={`btn-cart d-flex align-items-center ${
        submitting ? "disabled" : ""
      }`}
      type="button"
    >
      {submitting && <Spinner size={"20px"} color="white" />}
      {label}
    </button>
  );
};

export default FormButton;
