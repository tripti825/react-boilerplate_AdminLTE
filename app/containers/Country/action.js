import { countryConstants } from './constant';

export const countryActions = {
    country
};

function country(packet) {
    return {
        type: countryConstants.GETALL_REQUEST,
        payload: packet
    }
}

