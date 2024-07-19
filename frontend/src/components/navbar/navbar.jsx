import LinkButton from "../button/linkButton";
import "./navbar.scss";

function Navbar() {
    return (
        <nav>
            <div className="left">
                <LinkButton
                    text={"Start a Campaign"}
                    type={"primary"}
                    href={"#"}
                    size={"regular"}
                />
                <a href="#" className="explore">Explore</a>
            </div>
            <div className="mid">
                <a href="#">
                    <img src="/logo.svg" alt="logo" className="logo"/>
                </a>
            </div>
            <div className="right">
                <LinkButton
                    text={"Login"}
                    type={"secondary"}
                    href={"#"}
                    size={"regular"}
                />
                <LinkButton
                    text={"Sign Up"}
                    type={"primary"}
                    href={"#"}
                    size={"regular"}
                />
            </div>   
        </nav>
    )
}

export default Navbar;