import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoCorona } from "../../assets/crown.svg";
import { UserContext } from "../../context/user-context";
import { signOutUser } from "../../utils/firebase";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import CartIcon from "../cart-icon/cart-icon";
import "./nav-bar.css"

const NavBar = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const logOut = async()=> {
        await signOutUser()
        setCurrentUser(null)
    }
    
    const [isDropDown,setIsDropDown] = useState (false)

    const toggleDrowDown = ()=> {
        setIsDropDown(!isDropDown)
    }

    return (
        <div className="navigation personal ">
            <Link className="logo-container" to="/">
                <LogoCorona />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                {currentUser === null ?
                    <Link className="nav-link" to="/sign-in">
                        SIGN IN
                    </Link> :
                    <span className="nav-link" onClick={logOut}>
                        LOG OUT
                    </span>
                }
                <CartIcon onClickIcon = {toggleDrowDown}/>
            </div>
            {isDropDown && <CartDropdown/>}
        </div>
    )
}
export default NavBar;