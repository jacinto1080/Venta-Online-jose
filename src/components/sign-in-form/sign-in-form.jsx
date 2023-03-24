import { createUserDocFromAuth, signInUser, signInWithGooglePopUp } from '../../utils/firebase';
import { useForm } from 'react-hook-form';
import Button from '../button/button';
import { useContext } from 'react';
import { UserContext } from '../../context/user-context';
import { useNavigate } from 'react-router-dom';
const SignInForm = () => {
    const {setCurrentUser}= useContext(UserContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const LogGoogle = async () => {
        const response = await signInWithGooglePopUp()
        setCurrentUser(response)
        createUserDocFromAuth(response.user.uid, response.user.displayName, response.user.email)
        navigate("/")
    }
    const signInUserForm = async (data) => {
        try {
            const response = await signInUser(data.email, data.passWord)
            setCurrentUser(response)
            reset()
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <form className="signIn" onSubmit={handleSubmit(signInUserForm)}>
            <h1>SIGN IN</h1>
            <h4>Email</h4>
            <input placeholder='email@example.com'{...register('email', {
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
            })} />
            {errors?.email?.type === "required" && <p>Email is required.</p>}
            {errors?.email?.type === "pattern" && <p>Please enter correct email.</p>}
            <h4>Password</h4>
            <input placeholder='password'
                type="password" {...register('passWord', { required: true })} />
            {errors.passWord && <p>Password is required.</p>}
            <br></br>

            <Button buttonText="Sing In" />

            <Button type="button" onClick={LogGoogle} buttonClass="google-sign-in" buttonText="Login with Google" />

        </form>
    );
}
export default SignInForm;