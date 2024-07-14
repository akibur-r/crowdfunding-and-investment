import "./navbar.scss";
function Navbar() {
    return (
        <nav>
            <div className="left">
                <a href="#" className="bg-clr-fill">Start a Campaign</a>
                <a href="#" className="explore">Explore</a>
            </div>
            <div className="mid">
                <a href="#">
                    <img src="/logo.svg" alt="logo" className="logo"/>
                </a>
            </div>
            <div className="right">
                <a href="#" className="login bg-white-fill">Login</a>
                <a href="#" className="sign-up bg-clr-fill">Sign Up</a>
            </div>   
        </nav>
    )
}

export default Navbar;