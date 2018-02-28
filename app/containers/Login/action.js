import { loginConstants } from './constant';

export const loginActions = {
    login,
    logout
};

function login(packet) {
    return {
        type: loginConstants.LOGIN_REQUEST,
        payload: packet
    }
}

function logout() {
    return {
        type: loginConstants.LOGOUT_REQUEST
    }
}