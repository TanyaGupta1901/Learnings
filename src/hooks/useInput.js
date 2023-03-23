import { useState } from "react";

function useInput(validate, defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  const [touched, setTouched] = useState(false);
  const isValid = validate(value);
  const hasError = touched && !isValid;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurChangeHandler = (event) => {
    setTouched(true);
  };

  const resetValue = () => {
    setValue(defaultValue);
    setTouched(false);
  };
  return {
    value,
    valueChangeHandler,
    blurChangeHandler,
    hasError,
    resetValue,
    isValid,
  };
}

export default useInput;
