import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPassName } from '../../actions/auth'



export const RegisterScreen = () => {
    
    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);
    console.log(msgError)

    const [formValues, handleInputChange] = useForm({
        name : "Fausto Zaruma",
        email: "tozar@gmail.com",
        password: "123456",
        password2 : "123456"
        } )
    
    const {name, email, password, password2}=formValues


    const handleRegister = (e)=>{
        e.preventDefault()
        if (isFormValid()){
            dispatch(startRegisterWithEmailPassName(email,password,name))
        }
    }
    const isFormValid = ()=>{

        if(name.trim().length === 0){
            dispatch(setError ( "Name is Required!"))
            return false
        }else if (!validator.isEmail(email)){
            dispatch(setError ("Please insert a valid email!"))
            return false
        }else if(password !== password2 || password < 5){
            dispatch (setError("Passwords should be 6 characters long and match"))
            return false
        }
            dispatch(removeError())
        
        return true
    }

    return (
        <div>
            <h3 className= "auth__title">Register</h3>
            <form 
            className="animate__animated animate__fadeIn animate__faster"
            onSubmit={handleRegister}>

                { 
                    msgError &&
                    (<div className = "auth__alert-error">
                    {msgError}
                    </div>)
                }

                <input
                    type = "text"
                    placeholder ="Name"
                    name = "name"
                    className = "auth__input"
                    autoComplete="off"
                    value = {name}
                    onChange = {handleInputChange}
                />

                <input
                    type = "text"
                    placeholder ="Email"
                    name = "email"
                    className = "auth__input"
                    autoComplete="off"
                    value = {email}
                    onChange = {handleInputChange}
                />

                <input
                    type= "password"
                    placeholder="Password"
                    name = "password"
                    className = "auth__input"
                    autoComplete="off"
                    value = {password}
                    onChange = {handleInputChange}
                />

                <input
                    type= "password"
                    placeholder="Confirm password"
                    name = "password2"
                    className = "auth__input"
                    autoComplete="off"
                    value = {password2}
                    onChange = {handleInputChange}
                />

                <button 
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    
                >
                    Login

                </button>

                <hr/>

                <Link 
                to="/auth/login"
                className= "link"
                >
                    Already registered?
                </Link>
            </form>
        </div>
    )
}
