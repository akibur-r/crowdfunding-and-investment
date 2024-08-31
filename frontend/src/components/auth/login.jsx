import { useState } from 'react';
import { Link } from 'react-router-dom';
import SubmitButton from '../button/submitButton';
import './auth.scss';
import './login.scss';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    try {
      const response = await fetch('http://localhost:5000/api/users/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        alert('Successfully Login')
        // Handle success (e.g., save token, redirect to dashboard)
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
    <div className='auth login'>
      <div className="formContainer">
        <form className='form' onSubmit={handleSubmit} noValidate>
          <h1>Login</h1>
          <div className="form__inputHolder">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Enter Your Email'
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
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <SubmitButton value={"Login"} />

          <div className='form__bottomMessage'>Don't have an account? <Link to="/auth/signup">Sign Up</Link></div>
        </form>
      </div>
      {/* <div className="banner">
             <img src="/logo.svg" alt="tst" />
         </div> */}
    </div>
  );
}

export default Login;