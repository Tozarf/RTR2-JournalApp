import Swal from "sweetalert2"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import {types} from "../types/types"
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password)=>{
    return (dispatch)=>{

        dispatch(startLoading())
        
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                ({user})=>{
                    dispatch(
                        login(user.uid, user.displayName)
                        )
                    dispatch(finishLoading())
                }
            )
            .catch(e=>{
                console.log(e);
                dispatch(finishLoading());
                Swal.fire("Not so fast!","Username or password are not correct!","error")
            })

    }
}

export const startRegisterWithEmailPassName = (email, password, name)=>{

    return (dispatch)=>{

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async({user})=>{
            
            await user.updateProfile({displayName:name})
            console.log(user)

            // dispatch(
            //     login(user.uid, user.displayName)
            // )
        })
        .catch(e=>{
            console.log(e);
        })

    }


}

export const startGoogleLogin = () =>{
    return (dispatch)=>{

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user})=>{
            dispatch(
                login(user.uid, user.displayName)
            )
        });

    }
}

export const login = (uid,displayName)=>{
    
    
    return {
        type : types.login,
        payload : {
            uid,
        displayName
    }

    }
} 

export const startLogout = ()=>{
    return async (dispatch) =>{
        await firebase.auth().signOut();

        dispatch(logOut())
    }
}

export const logOut = ()=>({
    type: types.logout
})