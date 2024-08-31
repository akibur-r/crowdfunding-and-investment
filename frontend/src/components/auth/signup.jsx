import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubmitButton from '../button/submitButton';
import './auth.scss';
import './signup.scss';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      console.error('Passwords do not match');
      alert('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };  

  return (
    <div className='auth signup'>
      <div className="formContainer">
        <form className='form' onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="form__inputHolder">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder='e.g. John Doe'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form__inputHolder">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder='e.g. 01234567890'
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form__inputHolder">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='e.g. email@example.com'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form__inputHolder">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder='Type Your Password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form__inputHolder">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder='Type Your Password Again'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <SubmitButton value={"Sign Up"} />

          <div className='form__bottomMessage'>Already have an account? <Link to="/auth/login">Login</Link></div>
        </form>
      </div>
      {/* { <div className="banner">
            <img src="/logo.svg" alt="tst" />
        </div> } */}
    </div>
  );
}

export default SignUp;
