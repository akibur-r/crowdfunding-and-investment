import "./navbar.scss";
function Navbar() {
    return (
        <nav>
            <div className="left">Left</div>
            <div className="mid">
                <a href="#">
                    <img src="/logo.svg" alt="logo" />
                </a>
            </div>
            <div className="right">Right</div>   
        </nav>
    )
}

export default Navbar;