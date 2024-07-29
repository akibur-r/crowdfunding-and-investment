import { Link } from "react-router-dom";
import LinkButton from "../button/linkButton";
import "./navbar.scss";

function Navbar() {
    return (
        <nav>
            <div className="left">
                <LinkButton
                    text={"Start a Campaign"}
                    type={"primary"}
                    href={"/start-a-campaign"}
                    size={"regular"}
                />
                <Link to="/explore" className="explore">Explore</Link>
            </div>
            <div className="mid">
                <Link to="/">
                    <img src="/logo.svg" alt="logo" className="logo"/>
                </Link>
            </div>
            <div className="right">
                <LinkButton
                    text={"Login"}
                    type={"secondary"}
                    href={"/auth/login"}
                    size={"regular"}
                />
                <LinkButton
                    text={"Sign Up"}
                    type={"primary"}
                    href={"/auth/signup"}
                    size={"regular"}
                />
            </div>   
        </nav>
    )
}

export default Navbar;