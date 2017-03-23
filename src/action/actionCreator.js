import {UPDATE_COUPLE_PROFILE} from '../action/types'

export function updateCoupleProfile(category, imageValue) {
    return {
        type: UPDATE_COUPLE_PROFILE,
        payload: {category, imageValue}
    }
}