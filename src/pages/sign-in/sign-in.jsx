
import "./sign-in.css"

import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {
          
          return (
            <div className="authentication-container">
              <SignInForm/>
              <SignUpForm/>
              </div>
          );
        }
export default SignIn;