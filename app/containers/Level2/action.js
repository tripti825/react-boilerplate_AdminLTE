import { level2Constants } from './constant';

export const level2Actions = {
    getdata,
};

function getdata(packet) {
    return {
        type: level2Constants.DATA_GET_REQUEST,
        payload: packet
    }
}