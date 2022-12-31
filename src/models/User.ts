export interface User {
    userName: string;
    displayName: string;
    email: string;
    phoneNumber?: string;
    password: string;
    isAdmin: boolean;
}

export type PublicUser = Omit<User, 'password'>;