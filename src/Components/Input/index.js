import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';

import { InputContainer } from './styles';

export default function Input({ name, label, isUppercase, ...rest }) {
  const inputRef = useRef(null);
  const [notEmpty, setNotEmpty] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    
  }, [fieldName, registerField]);

  const toInputUppercase = (e) => {
    if (isUppercase) {
      e.target.value = `${e.target.value}`.toUpperCase();
    }
    
    setNotEmpty(e.target.value.length > 0);
  };

  return (
    <InputContainer
      uppercase={isUppercase}
      invalid={error}
      notEmpty={notEmpty}
    >
      <input
        ref={inputRef} 
        id={name}
        name={name} 
        defaultValue={defaultValue}
        onBlur={toInputUppercase}
        required
        autocomplete="off"
        {...rest}
      />
      <label htmlFor={name}>
        <span>{label}</span>
        {error && (
          <span className="error">{error}</span>
        )}
      </label>
    </InputContainer>
  );
}
