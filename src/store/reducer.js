
import {
    SET_JOB,
    ADD_JOB,
    EDIT_JOB,
    EDIT_INPUT_JOB,
    DELETE_JOB,
    DELETE_ALL_JOB,
} from './constants'
import { storage } from './storage'

const initState = storage.get('job-list');

function reducer(state, action) {
    let newState;

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                jobInput: action.data,
            }
            break;

        case ADD_JOB:
            newState = {
                ...state,
                jobList: [...state.jobList, action.data],
            }
            break;

        case EDIT_INPUT_JOB:
            newState = {
                ...state,
                jobEditInput: action.data,
            }
            break;

        case EDIT_JOB:
            const newEditState = [...state.jobList];
            newEditState[action.data.id] = action.data.currentJob;

            newState = {
                ...state,
                jobList: newEditState,
            }
            break;

        case DELETE_JOB:
            const newDeleteState = [...state.jobList];
            newDeleteState.splice(action.data, 1);

            newState = {
                ...state,
                jobList: newDeleteState,
            }
            break;

        case DELETE_ALL_JOB:
            newState = {
                ...state,
                jobList: action.data,
            }
            break;

        default:
            throw new Error('Invalid action! Please try again...');
    }

    storage.set('job-list', { ...newState, jobInput: '', jobEditInput: '' })

    return newState;
}

export { initState }
export default reducer
