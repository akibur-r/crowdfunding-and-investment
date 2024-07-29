import './signup.scss'
import SubmitButton from '../button/submitButton'

function Signup(){
  return (
    <div className='signup'>
        <div className="form-container">
            <h1>Sign Up</h1>
            <div className="form">
                <form action="#">
                    <input type="text" name="fullname" id="fullname" placeholder='Full Name' />
                    <input type="text" name="phonenumber" id="phonenumber" placeholder='Phone Number' />
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <input type="password" name="password" id="password" placeholder='Password' />
                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm Password' />

                    <SubmitButton value={"Sign Up"}/>

                    <div>Already have an account? <a href="#">Login</a></div>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Signup