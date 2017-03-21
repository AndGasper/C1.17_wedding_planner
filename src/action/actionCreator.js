import {SELECT_IMAGE} from './types';

export function selectImage(pageIndex, imageIndex) {
    return {
        type: SELECT_IMAGE,
        payload: {pageIndex, imageIndex}
    }
}