import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { disableNetwork } from "firebase/firestore"; 

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
    auth: {
        uid: 'TESTING'
    }
});

describe('Testing notes actions', () => {
    
    afterAll(() => { disableNetwork(db); }) 

    test('should create a new note', async() => {
        await store.dispatch( startNewNote())




    })
    

})
