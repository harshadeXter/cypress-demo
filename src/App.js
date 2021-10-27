import { useState } from 'react';

import './App.css';

function App() {

  //State object
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  console.log('dub : ', submitted);
  console.log('sub', values);

  const handleFirstNameInput = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInput = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInput = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('val sub', values);
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      {submitted && valid && <div class='success-message'>Registered Successfully.</div>}
      <form class="register-form" onSubmit={handleSubmit}>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInput}
        />
        {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInput}
        />
        {submitted && !values.lastName && <span id="last-name-error">Please enter a last name</span>}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInput}
        />
        {submitted && !values.email && <span id="email-error">Please enter an email address</span>}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
