import SubmitButton from '../button/submitButton'
import './auth.scss'
import './signup.scss'

function SignUp(){
  return (
    <div className='auth signup'>
        <div className="formContainer">
            <form className='form' noValidate>
                    <h1>Login</h1>
                    <div className="form__inputHolder">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="fullname" id="fullname" placeholder='e.g. John Doe' />
                    </div>
                    <div className="form__inputHolder">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder='e.g. 01234567890' />
                    </div>
                    <div className="form__inputHolder">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" id="email" placeholder='e.g. email@example.com' />
                    </div>
                    <div className="form__inputHolder">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="Password" id="password" placeholder='Type Your Password' />
                    </div>
                    <div className="form__inputHolder">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Type Your Password Again' />
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

export default SignUp