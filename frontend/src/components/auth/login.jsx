import SubmitButton from '../button/submitButton'
import './auth.scss'
import './login.scss'

function Login(){
  return (
    <div className='auth login'>
        <div className="formContainer">
            <form className='form' noValidate>
                    <h1>Login</h1>
                    <div className="form__inputHolder">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" id="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="form__inputHolder">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="Password" id="password" placeholder='Password' />
                    </div>
                    <SubmitButton value={"Login"}/>

                    <div className='form__bottomMessage'>Don't have an account? <a href="#">Sign Up</a></div>
                </form>
        </div>
        
        {/* <div className="banner">
            <img src="/logo.svg" alt="tst" />
        </div> */}
    </div>
  )
}

export default Login