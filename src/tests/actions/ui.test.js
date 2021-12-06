import { finishLoading, removeError, setError, startLoading } from "../../actions/ui"
import { types } from "../../types/types"


describe('Testing ui actions', () => {
    
    test('all actions should work', () => {
        
        const errorAction = setError('help me, im feeling weird')

        expect(errorAction).toEqual({
            type: types.uiSetError,
            payload:'help me, im feeling weird'
        });

        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });

    });
    


})
