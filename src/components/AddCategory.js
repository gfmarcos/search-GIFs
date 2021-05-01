import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Para evitar el comportamiento de submit, refresca la página
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]); // Recogo con cats en valor de entrada que también se podría haber pasado con props
      setInputValue('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
