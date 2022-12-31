import {get, put} from "./ApiUtils";
import {User} from "../models/User";

export const register = (userData: Omit<User, 'displayName' | 'phoneNumber'>) => {
    return put('users', { ...userData, displayName: userData.userName, phoneNumber: '' });
}

export const login = (userName: string, password: string) => {
    return get(`users/${userName}`)
        .then(user => {
            if (!user) {
                throw new Error('Invalid user');
            }

            return user;
        });
}