import { useForm } from 'react-hook-form';
import Button from '../button/button';
import { createAuthUser, createUserDocFromAuth } from '../../utils/firebase';
import { useContext } from 'react';
import { UserContext } from '../../context/user-context';
import { useNavigate } from 'react-router-dom';
const SignUpForm = () => {
    const navigate = useNavigate()
    const {setCurrentUser}= useContext(UserContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm();
    
    const onFormSubmit = async (data) => {
        const response = await createAuthUser(data.email, data.password1)
        try {
            createUserDocFromAuth(response.user.uid, data.name, data.email)
            setCurrentUser(response)
            reset()
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }
        return (
            <form className='signIn' onSubmit={handleSubmit(onFormSubmit)}>
                <h1>SIGN UP</h1>
                <h4>Name</h4>
                <input placeholder="name" {...register('name', {
                    required: true,
                    pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/
                })} />
                {errors?.name?.type === "required" && <p>Please enter name.</p>}
                {errors?.name?.type === "pattern" && <p>Please enter correct name.</p>}
                <h4>Email</h4>
                <input placeholder="email" {...register('email', {
                    required: true,
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                })} />
                
                {errors?.email?.type === "required" && <p>Please enter email.</p>}
                {errors?.email?.type === "pattern" && <p>Please enter correct email.</p>}
                <h4>Password</h4>
                <input placeholder="password" type="password" {...register('password1', {
                    required: true,
                    pattern: /(?=.*[0-9a-zA-Z]).{6,}/
                })} />
                {errors.password && <p>Password is required.</p>}
                <br></br>
                <input placeholder="repit password" 
                type="password" {...register('password2', { required: true })} />
                {errors.password && <p>Password is required.</p>}
                {watch("password1") !== watch("password2") && <p>Not match</p>}
                <br></br>
                <Button buttonText="Sign Up" />
            </form>
        );
    }
export default SignUpForm;