import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import style from './ContactForm.module.css';

class FormNumber extends Component {
  state = {
    name: '',
    number: '',
  };

  onhandleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onSubmitForm = e => {
    e.preventDefault();
    const id = nanoid();
    const numberInfo = {
      id,
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addNumber(numberInfo);
    this.reset();
  };
  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }
  idName = nanoid();
  idNumber = nanoid();
  render() {
    return (
      <form onSubmit={this.onSubmitForm} className={style.container}>
        <label htmlFor={this.idName} className={style.label__title}>
          Name
        </label>
        <input
          id={this.idName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.onhandleChange}
          className={style.input__form}
        />
        <label htmlFor={this.idNumber} className={style.label__title}>
          Number{' '}
        </label>
        <input
          id={this.idNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.onhandleChange}
          className={style.input__form}
        />
        <button type="submit" className={style.form__button}>
          Add contatc
        </button>
      </form>
    );
  }
}

export default FormNumber;

FormNumber.propTypes = {
  addNumber: PropTypes.func.isRequired,
};
