import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"

describe('Testing auth reducer', () => {
    test('should return default state', () => {
        const initState = {
            uid: 'miau',
            name: 'miau'
        }
        const action = {
            type: 'skeleeer',
        };
        const state = authReducer(initState,action)

        expect(state).toEqual(initState)
    })

    test('should return uid and name', () => {
        const action = {
            type: types.login,
            payload:{
                uid: 'abc',
                displayName:'Francisca'
            }
        };

        const initState = {}

        const state = authReducer(initState, action)

        expect(state).toEqual({
                uid: 'abc',
                name:'Francisca'
            })
            
        })
        test('should return default initial state', () => {
        
        const initState = {
            uid: 'abc',
            name:'Francisca'
        }
        
        const action = {
            type: types.logout,
        };


        const state = authReducer(initState, action)

        expect(state).toEqual({})
        
    })
    
    
})
