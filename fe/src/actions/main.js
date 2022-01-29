import {
    CHANGE_TYPE,
} from '../constants/actionTypes';

export function changeLanguage (locale) {
    return {
        type: CHANGE_TYPE,
        locale
    }
}