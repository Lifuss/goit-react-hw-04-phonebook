import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.name.value, e.target.elements.number.value);
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="[A-z]{2,9} [A-z]{2,9}"
          title="latin chars, 
          format:Name Surname"
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          title="123-45-67"
          required
        />
      </StyledLabel>

      <StyledBtn>Add contacts</StyledBtn>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
