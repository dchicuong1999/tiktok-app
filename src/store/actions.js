
import { 
    SET_JOB, 
    ADD_JOB, 
    EDIT_JOB, 
    EDIT_INPUT_JOB, 
    DELETE_JOB,
    DELETE_ALL_JOB, 
} from './constants'

export const setJob = data => {
    return {
        type: SET_JOB,
        data
    }
}

export const addJob = data => {
    return {
        type: ADD_JOB,
        data
    }
}

export const editJob = data => {
    return {
        type: EDIT_JOB,
        data
    }
}

export const editInputJob = data => {
    return {
        type: EDIT_INPUT_JOB,
        data
    }
}

export const deleteJob = data => {
    return {
        type: DELETE_JOB,
        data
    }
}

export const deleteAllJob = data => {
    return {
        type: DELETE_ALL_JOB,
        data
    }
}
