import { level1Constants } from './constant';

export const level1Actions = {
    postdata,
};

function postdata(packet) {
    return {
        type: level1Constants.DATA_POST_REQUEST,
        payload: packet
    }
}