import { useState } from 'react';

function useValidateForm(initialValue) {
  const [value, setValue] = useState(initialValue);

  const isValueValid = (minLength, maxLength) => {
    if (value.length === 0) return false;
    if (value.length < minLength || value.length > maxLength) return false;

    return true;
  };

  return [value, setValue, isValueValid];
}

export default useValidateForm;
