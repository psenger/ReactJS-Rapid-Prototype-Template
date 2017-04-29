
import * as actionConstants from "./actionTypes/profiles";

export const updateProfiles = profiles => ({
    type: actionConstants.PROFILES_UPDATE,
    value: profiles
});

export const updateMessage = message => ({
    type: actionConstants.PROFILES_MESSAGE,
    value: message
});

