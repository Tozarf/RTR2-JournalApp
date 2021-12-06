import { types } from "../../types/types";


describe('Testing types', ()=>{

    const expectedTypes = {
        login:"[Auth] login",
        logout:"[Auth] logout",
    
        uiSetError : "[UI] Set Error",
        uiRemoveError : "[UI] Remove Error",
        
        uiStartLoading : "[UI] Start Loading",
        uiFinishLoading : "[UI] Finish Loading",
    
        notesAddNew : "[Notes] Add New Entry",
        notesActive : "[Notes] Set Active Note",
        notesLoad : "[Notes] Load Notes",
        notesUpdated : "[Notes] Updated Note",
        notesFileUrl : "[Notes] Updated image url",
        notesDelete : "[Notes] Delete Note",
    
    };
    test('should match project types', () => {

        expect(types).toEqual(expectedTypes)
    });

});