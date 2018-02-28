import { registerConstants } from './constant';

export const registerActions = {
    register,
};

function register(packet) {
    return {
        type: registerConstants.REGISTER_REQUEST,
        payload: packet
    }
}

