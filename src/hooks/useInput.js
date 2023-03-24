import { useEffect, useState } from "react";

function useInput(validate, defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    setIsValid(validate(value));
  }, [value, validate]);

  useEffect(() => {
    setHasError(touched && !isValid);
  }, [isValid, touched]);

  console.log(value);
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
