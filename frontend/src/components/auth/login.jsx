import SubmitButton from '../button/submitButton'
import './login.scss'

function Login(){
  return (
    <div className='login'>
        <div className="form-container">
            <h1>Login</h1>
            <div className="form">
                <form action="#">
                    <input type="email" name="Email" id="email" placeholder='Email' />
                    <input type="password" name="Password" id="password" placeholder='Password' />
                    <SubmitButton value={"Login"}/>

                    <div>Don't have an account? <a href="#">Sign Up</a></div>
                </form>
                
            </div>
        </div>
        
        {/* <div className="banner">
            <img src="/logo.svg" alt="tst" />
        </div> */}
    </div>
  )
}

export default Login